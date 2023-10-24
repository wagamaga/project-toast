import React, { memo, useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastsContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = useContext(ToastsContext);
  console.log('qweqwe');
  return (
    <ol
      role="alert"
      aria-live="assertive"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} message={message} id={id} />
        </li>
      ))}
    </ol>
  );
}

export default memo(ToastShelf);
