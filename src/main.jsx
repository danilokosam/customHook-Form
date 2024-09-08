import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Form } from "./Form";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form />
  </StrictMode>
);