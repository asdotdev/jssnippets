import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { constructSlug } from "../utills";
import { storage } from "webextension-polyfill";

export interface SnippetFields {
    title: string;
    code: string;
}

export interface Snippet extends SnippetFields {
    id: string;
    slug: string;
    unix: number;
}

const initData = () => {
    return {
        id: uuidv4(),
        slug: "",
        title: "",
        code: "",
        unix: Date.now()
    };
};

const useSavedSnippets = () => {
    const [snippets, setSnippets] = useState<Array<Snippet>>([]);
    const [formData, setFormData] = useState<Snippet>(initData());

    useEffect(() => {
        const getSnippets = async () => {
            const { snippets } = await storage.local.get("snippets");

            if (snippets && typeof snippets == "object") {
                setSnippets(snippets as Array<Snippet>);
            }
        };

        getSnippets();
    }, []);

    const onViewChange = (id?: string) => {
        const viewContainer = document.getElementById("viewContainer");
        const viewCta = document.getElementById("viewCta");

        if (viewCta) {
            if (viewCta.ariaLabel == "new") {
                viewCta.ariaLabel = "close";
                id && setFormData(snippets.filter((each) => each.id === id)[0]);
            } else {
                viewCta.ariaLabel = "new";
            }
            viewCta.classList.toggle("rotate-45");
        }
        if (viewContainer) viewContainer.classList.toggle("-translate-x-1/2");
    };

    const onUpdateFormData = (key: string, val: string) => {
        setFormData((prev) => {
            if (prev) return { ...prev, [key]: val };
            return prev;
        });
    };

    const saveSnippet = (data: Snippet) => {
        setSnippets((prev) => {
            const updatedsnippets: Array<Snippet> = [
                ...prev.filter((each) => each.id !== data.id),
                { ...data, slug: constructSlug(data.title) }
            ];
            storage.local.set({ snippets: updatedsnippets });
            return updatedsnippets;
        });
        setFormData(initData());
        onViewChange();
    };

    const deleteSnippet = (id: string) => {
        setSnippets((prev) => {
            const updatedsnippets: Array<Snippet> = prev.filter(
                (each) => each.id !== id
            );
            storage.local.set({ snippets: updatedsnippets });
            return updatedsnippets;
        });
    };

    return {
        snippets,
        formData,
        onUpdateFormData,
        onViewChange,
        saveSnippet,
        deleteSnippet
    };
};

export default useSavedSnippets;
