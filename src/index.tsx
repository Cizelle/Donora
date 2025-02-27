import React from "react";
import "./input.css";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main App component

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
