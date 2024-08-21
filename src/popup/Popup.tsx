import NewEntry from "../components/NewEntry";
import SnippetsList from "../components/SnippetsList";
import NavBar from "../components/NavBar";
import useSavedSnippets from "../hooks/useSavedSnippets";

function Popup() {
    const {
        snippets,
        formData,
        onUpdateFormData,
        onViewChange,
        saveSnippet,
        deleteSnippet
    } = useSavedSnippets();

    return (
        <div className="w-80 h-96 overflow-hidden flex flex-col bg-background text-text m-auto">
            <NavBar onViewChange={onViewChange} />
            <div
                id="viewContainer"
                className="flex-1 w-[200%] flex overflow-hidden transition-all"
            >
                <SnippetsList
                    snippets={snippets}
                    onViewChange={onViewChange}
                    deleteSnippet={deleteSnippet}
                />
                <NewEntry
                    formData={formData}
                    onUpdateFormData={onUpdateFormData}
                    saveSnippet={saveSnippet}
                />
            </div>
        </div>
    );
}

export default Popup;
