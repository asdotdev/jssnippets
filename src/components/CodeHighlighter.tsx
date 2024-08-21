import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

interface NewEntryProps {
    code: string;
    setCode?: (str: string) => void;
}

const CodeSnippet: React.FC<NewEntryProps> = ({ code, setCode }) => {
    const onValueChange = (str: string) => {
        setCode && setCode(str);
    };

    return (
        <Editor
            value={code}
            onValueChange={onValueChange}
            highlight={(code) => highlight(code, languages.js, "javascript")}
            disabled={!setCode}
            padding={8}
            tabSize={4}
            required
            className="flex-1 max-h-full text-sm bg-text/10 rounded overflow-scroll"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
        />
    );
};

export default CodeSnippet;
