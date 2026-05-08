import { RefObject, useEffect } from "react";

export const useKeydown = (
  ref: RefObject<HTMLElement | null> | null,
  key: string,
  callback: (event: KeyboardEvent) => void,
) => {
  useEffect(() => {
    const targetElement = ref?.current ?? document;

    const listener: EventListener = (event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === key) {
        keyboardEvent.preventDefault();
        callback(keyboardEvent);
      }
    };

    targetElement.addEventListener("keydown", listener);

    return () => {
      targetElement.removeEventListener("keydown", listener);
    };
  }, [ref, key, callback]);
};
