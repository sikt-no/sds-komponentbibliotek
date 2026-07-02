import { RefObject, useEffect, useRef } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: (event: MouseEvent) => void,
) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let isPointerdownOutside = false;

    const listenerPointerdown = (event: MouseEvent) => {
      isPointerdownOutside =
        (ref.current && !ref.current.contains(event.target as Node)) ?? false;
    };
    const listenerPointerup = (event: MouseEvent) => {
      if (
        isPointerdownOutside &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        callbackRef.current(event);
      }
      isPointerdownOutside = false;
    };

    document.addEventListener("pointerdown", listenerPointerdown);
    document.addEventListener("pointerup", listenerPointerup);

    return () => {
      document.removeEventListener("pointerdown", listenerPointerdown);
      document.removeEventListener("pointerup", listenerPointerup);
    };
  }, [ref]);
};
