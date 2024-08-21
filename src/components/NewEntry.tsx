import CodeSnippet from "./CodeHighlighter";
import { Snippet } from "../hooks/useSavedSnippets";

interface NewEntryProps {
    formData: Snippet | null;
    onUpdateFormData: (key: string, val: string) => void;
    saveSnippet: (data: Snippet) => void;
}

const NewEntry: React.FC<NewEntryProps> = ({
    formData,
    onUpdateFormData,
    saveSnippet,
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData) saveSnippet(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-1/2 h-full overflow-y-scroll flex flex-col gap-4 p-4"
        >
            <div className="grid gap-2">
                <label htmlFor="title">Title:</label>
                <input
                    className="bg-text/10 rounded p-2"
                    value={formData?.title}
                    onChange={(e) => onUpdateFormData("title", e.target.value)}
                    required
                    type="text"
                />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="code">Code:</label>
                <CodeSnippet
                    code={formData?.code || ""}
                    setCode={(value) => onUpdateFormData("code", value)}
                />
            </div>
            <button
                type="submit"
                aria-label="save"
                className="place-self-end border-2 border-accent font-bold text-accent rounded-full px-6 py-1"
            >
                Save
            </button>
        </form>
    );
};

export default NewEntry;
