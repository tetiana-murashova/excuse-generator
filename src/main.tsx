import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function WithShortcuts() {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "g") {
        document.getElementById("generate-btn")?.click();
      }
      if (e.key.toLowerCase() === "c") {
        document.getElementById("copy-btn")?.click();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <App />;
}

createRoot(document.getElementById("root")!).render(<WithShortcuts />);
