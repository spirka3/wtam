import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ToastProvider } from "./providers/ToastProvider";
import { BrowserRouter } from "react-router-dom";
import { ActivityProvider } from "./providers/ActivityProvider";

function Provider({ children }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <ActivityProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ActivityProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default Provider;
