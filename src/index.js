import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Mount function for running the app both standalone and as a remote
const mount = element => {
  const root = createRoot(element);

  root.render(
    <React.StrictMode>
      {/* Wrap with BrowserRouter only in development/standalone mode */}
      {process.env.NODE_ENV === "development" ? (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      ) : (
        <App />
      )}
    </React.StrictMode>
  );

  return root;
};

// If we are in development and running the app standalone
if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("root");
  if (element) {
    mount(element);
  }
}

// Export the mount function for container usage
export { mount };
