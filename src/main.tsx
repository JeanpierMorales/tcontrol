import { StrictMode } from "react"; // Importando StrictMode
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Adicionando Bootstrap
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
