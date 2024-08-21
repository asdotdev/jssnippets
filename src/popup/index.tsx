import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./Popup";
import "../css/tailwind.css";

function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);

    if (!appContainer) throw new Error("Can not find AppContainer");

    const root = ReactDOM.createRoot(appContainer);

    root.render(
        <React.StrictMode>
            <Popup />
        </React.StrictMode>
    );
}

init();
