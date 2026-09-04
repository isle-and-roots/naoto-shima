import React from "react";
import ReactDOM from "react-dom/client";
import { CasePage } from "./pages/CasePage";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CasePage />
  </React.StrictMode>,
);
