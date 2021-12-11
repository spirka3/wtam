import React, { useContext, useState, createContext, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import { FiSmile } from "react-icons/all";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({});

  useEffect(() => {
    if (toast.message) {
      setTimeout(() => {
        setToast({});
      }, 3000);
    }
  }, [toast]);

  const MyToast = () => {
    return (
      <Toast
        className="my-toast"
        show={toast.message !== undefined}
        delay={4000}
        onClose={() => setToast({})}
      >
        <Toast.Header style={{ backgroundColor: "#9ED6FF", color: "black" }}>
          <h6 className="mr-auto">Upozornenie</h6>
          <small>{toast.time || "just now"}</small>
        </Toast.Header>
        <Toast.Body>
          <p style={{ fontWeight: "500" }}>
            {toast.message || "default text message"} <FiSmile size={25} />
          </p>
        </Toast.Body>
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
