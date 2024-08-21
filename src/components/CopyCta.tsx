import { useState } from "react";
import Copy from "../icons/Copy";
import Done from "../icons/Done";

const CopyCta: React.FC<{ code: string }> = ({ code }) => {
    const [copied, setCopied] = useState<boolean>(false);

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 10000);
    };

    return (
        <button onClick={onCopy} aria-label={copied ? "done" : "copy"}>
            {copied ? (
                <Done className="w-4 h-4 stroke-[green]" />
            ) : (
                <Copy className="w-4 h-4 stroke-accent" />
            )}
        </button>
    );
};

export default CopyCta;
