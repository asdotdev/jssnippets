import Add from "../icons/Add";
import Logo from "../icons/Logo";

interface NavBarProps {
    onViewChange: (id?: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onViewChange }) => {
    return (
        <nav className="flex justify-between items-center border-b border-text/10 p-4">
            <div className="flex items-center gap-2">
                <Logo className="w-6 h-6 fill-accent" />
                <h1 className="text-lg">JS Snippets</h1>
            </div>
            <button
                onClick={() => onViewChange()}
                className="transition-all"
                aria-label="new"
                id="viewCta"
            >
                <Add className="w-6 h-6 stroke-accent" />
            </button>
        </nav>
    );
};

export default NavBar;
