import { useEffect } from "react";

function useEscapeKey(callBack) {
  useEffect(() => {
    function removeToasts(event) {
      if (event.code === "Escape") {
        callBack();
      }
    }
    window.addEventListener("keydown", removeToasts);
    return () => {
      window.removeEventListener("keydown", removeToasts);
    };
  }, [callBack]);
}

export default useEscapeKey;
