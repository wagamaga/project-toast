import React, { createContext, useState, useCallback } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastsContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const handleEscape = useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

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
