import React, { createContext, useState, useEffect } from "react";

export const ToastsContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function removeToasts(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }
    window.addEventListener("keydown", removeToasts);
    return () => {
      window.removeEventListener("keydown", removeToasts);
    };
  }, []);

  const creatToast = (message, variant) => {
    const newToast = [...toasts];
    newToast.push({ message, variant, id: String(Math.random()) });
    setToasts(newToast);
  };

  const deleteToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const value = {
    creatToast,
    deleteToast,
    toasts,
  };
  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
}

export default ToastProvider;
