import React, { useContext, useState, createContext } from "react";
import Toast from "react-bootstrap/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({});

  const MyToast = () => {
    return (
      <Toast
        className="my-toast"
        show={toast.message !== undefined}
        // autohide
        // delay={3000}
        onClose={() => setToast({})}
      >
        <Toast.Header>
          <strong className="mr-auto">Upozornenie</strong>
          <small>{toast.time || "just now"}</small>
        </Toast.Header>
        <Toast.Body>{toast.message || "default text message"}</Toast.Body>
      </Toast>
    );
  };

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      <MyToast />
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
