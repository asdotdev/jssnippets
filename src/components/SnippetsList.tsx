import { Snippet } from "../hooks/useSavedSnippets";
import CodeSnippet from "./CodeHighlighter";
import Edit from "../icons/Edit";
import Bin from "../icons/Bin";
import CopyCta from "./CopyCta";
import Empty from "../icons/Empty";

interface NewEntryProps {
    snippets: Array<Snippet>;
    onViewChange: (id?: string) => void;
    deleteSnippet: (id: string) => void;
}

const SnippetsList: React.FC<NewEntryProps> = ({
    snippets,
    onViewChange,
    deleteSnippet
}) => {
    return (
        <ul className="w-1/2 h-full overflow-y-scroll flex flex-col gap-4 p-4">
            {snippets.length ? (
                snippets.map((snippet) => (
                    <li
                        key={snippet.id}
                        className="grid gap-2 bg-text/10 rounded p-2"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-base">{snippet.title}</h3>
                            <div className="flex gap-2">
                                <CopyCta code={snippet.code} />
                                <button
                                    onClick={() => onViewChange(snippet.id)}
                                    aria-label="edit"
                                >
                                    <Edit className="w-4 h-4 stroke-accent" />
                                </button>
                                <button
                                    onClick={() => deleteSnippet(snippet.id)}
                                    aria-label="delete"
                                >
                                    <Bin className="w-4 h-4 stroke-[red]" />
                                </button>
                            </div>
                        </div>
                        <CodeSnippet code={snippet.code} />
                    </li>
                ))
            ) : (
                <div className="flex-1 flex flex-col justify-center items-center gap-2">
                    <Empty className="w-8 h-8 stroke-accent" />
                    <p className="text-base">No Snippet's Found</p>
                </div>
            )}
        </ul>
    );
};

export default SnippetsList;
