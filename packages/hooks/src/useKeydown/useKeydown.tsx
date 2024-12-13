import { RefObject, useEffect } from "react";

export const useKeydown = (
  ref: RefObject<HTMLElement | null> | null,
  key: string,
  callback: (event: KeyboardEvent) => void,
) => {
  useEffect(() => {
    const targetElement = ref?.current ?? document;

    const listener = (event: KeyboardEvent) => {
      if (event.key === key) {
        event.preventDefault();
        callback(event);
      }
    };

    // @ts-expect-error: Type '(event: KeyboardEvent) => void' is not assignable to type 'EventListener'.
    targetElement.addEventListener("keydown", listener);

    return () => {
      // @ts-expect-error: Type '(event: KeyboardEvent) => void' is not assignable to type 'EventListener'.
      targetElement.removeEventListener("keydown", listener);
    };
  }, [ref, key, callback]);
};
