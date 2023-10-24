import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  console.log(toasts);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            handleDismiss={handleDismiss}
            variant={variant}
            message={message}
            id={id}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
