import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { UseContextProvider } from "./component/raContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseContextProvider>
      <App />
    </UseContextProvider>
  </React.StrictMode>
);
