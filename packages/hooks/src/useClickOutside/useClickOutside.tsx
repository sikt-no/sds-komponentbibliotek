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

    const isEventOutside = (event: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      /* istanbul ignore next */
      const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      return isOutside;
    };

    const listenerPointerdown = (event: MouseEvent) => {
      isPointerdownOutside = isEventOutside(event) ?? false;
    };
    const listenerPointerup = (event: MouseEvent) => {
      if (isPointerdownOutside && isEventOutside(event)) {
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
