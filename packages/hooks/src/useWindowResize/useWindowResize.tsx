import { useEffect } from "react";

export interface useWindowResizeOptions {
  throttleTime?: number;
}

export const useWindowResize = (
  callback: (() => void) | undefined,
  options?: useWindowResizeOptions,
) => {
  const { throttleTime = 200 } = options ?? {};

  useEffect(() => {
    let throttleTimeout: number;
    let handleResize: (() => void) | undefined;

    if (callback) {
      handleResize = () => {
        if (throttleTimeout) {
          clearTimeout(throttleTimeout);
        }
        throttleTimeout = window.setTimeout(() => {
          callback();
        }, throttleTime);
      };

      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [callback, throttleTime]);
};
