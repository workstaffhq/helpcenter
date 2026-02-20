import { createRoot } from "react-dom/client";
import App from "./App";

let mountRoot = document.getElementById("__visual_editor_root");
if (!mountRoot) {
  mountRoot = document.createElement("div");
  mountRoot.id = "__visual_editor_root";
  document.body.append(mountRoot);
}

createRoot(mountRoot).render(<App />);
