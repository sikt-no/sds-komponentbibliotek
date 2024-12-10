import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, callback]);
};
