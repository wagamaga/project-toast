import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = useState("notice");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    if (message) {
      setPopup(true);
    }
  };

  const handleDismiss = () => {
    setPopup(false);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {popup && (
        <Toast
          variant={variant}
          message={message}
          handleDismiss={handleDismiss}
        />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <form></form>
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
            <Button onClick={handleClick}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
