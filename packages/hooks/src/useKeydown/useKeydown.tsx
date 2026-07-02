import { RefObject, useEffect, useRef } from "react";

export const useKeydown = (
  ref: RefObject<HTMLElement | null> | null,
  key: string,
  callback: (event: KeyboardEvent) => void,
) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const targetElement = ref?.current ?? document;

    const listener: EventListener = (event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === key) {
        keyboardEvent.preventDefault();
        callbackRef.current(keyboardEvent);
      }
    };

    targetElement.addEventListener("keydown", listener);

    return () => {
      targetElement.removeEventListener("keydown", listener);
    };
  }, [ref, key]);
};
