import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = useState("notice");
  const [message, setMessage] = useState("");
  // const [popup, setPopup] = useState(false);
  const [toasts, setToasts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message) {
      return;
    }
    // setPopup(true);

    const newToast = [...toasts];
    newToast.push({ message, variant, id: String(Math.random()) });
    setToasts(newToast);
  };

  const handleDismiss = (currentId) => {
    setToasts(toasts.filter((toast) => toast.id !== currentId));
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />}

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                required={true}
                onChange={(event) => setMessage(event.target.value)}
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;
                return (
                  <label key={id} htmlFor={option}>
                    <input
                      id={option}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variant === option}
                      onChange={(event) => setVariant(event.target.value)}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
