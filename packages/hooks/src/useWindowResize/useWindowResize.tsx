import { useEffect, useRef } from "react";

export interface useWindowResizeOptions {
  throttleTime?: number;
}

export const useWindowResize = (
  callback: (() => void) | undefined,
  options?: useWindowResizeOptions,
) => {
  const { throttleTime = 200 } = options ?? {};
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const hasCallback = callback !== undefined;

  useEffect(() => {
    if (!hasCallback) return;

    let throttleTimeout: number;

    const handleResize = () => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      throttleTimeout = window.setTimeout(() => {
        callbackRef.current?.();
      }, throttleTime);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [hasCallback, throttleTime]);
};
