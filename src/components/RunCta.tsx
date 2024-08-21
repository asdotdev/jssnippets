import { scripting, tabs } from "webextension-polyfill";
import Run from "../icons/Run";

const RunCta: React.FC<{ code: string }> = ({ code }) => {
    const onClick = async () => {
        const activeTabs = await tabs.query({
            active: true,
            currentWindow: true
        });

        if (activeTabs[0].id) {
            scripting.executeScript({
                target: { tabId: activeTabs[0].id },
                func: (code) => {
                    if (code && typeof code == "string") {
                        const script = document.createElement("script");
                        script.textContent = code;
                        document.body.appendChild(script);
                        script.remove();
                    }
                },
                args: [code],
                world: "MAIN"
            });
            // eval() and world: "MAIN" are Security Risk Content-Security-Policy

            window.close();
        }
    };

    return (
        <button onClick={onClick} aria-label="run">
            <Run className="w-4 h-4 fill-accent stroke-accent" />
        </button>
    );
};

export default RunCta;
