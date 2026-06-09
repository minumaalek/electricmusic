import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3 lg:text-2xl">
      <span>Sorry, something is wrong with this page.</span>
      <span>We're trying to fix whatever led to this problem.</span>
      <span className="text-red-600">Error details: {error.message}</span>
      <a className="text-gray-600 hover:text-black" href={"/"}>
        {" "}
        Turn back to home page
      </a>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </HashRouter>
  </StrictMode>,
);
