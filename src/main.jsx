import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import LoadingAnimation from "./Animation/loagingAnimation.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <LoadingAnimation>
     */}
    <App />
    {/* </LoadingAnimation> */}
  </StrictMode>,
);
