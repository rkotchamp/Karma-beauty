import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShowNavProvider } from "./context/ShowNav.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShowNavProvider>
        <App />
      </ShowNavProvider>
    </BrowserRouter>
  </React.StrictMode>
);
