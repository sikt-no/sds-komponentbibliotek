import { useEffect } from "react";

type Options = {
  throttleTime?: number;
};

const useWindowResize = (callback: () => void, options?: Options) => {
  const { throttleTime = 200 } = options || {};

  useEffect(() => {
    let throttleTimeout: number;

    const handleResize = () => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      throttleTimeout = window.setTimeout(() => {
        callback();
      }, throttleTime);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [callback, throttleTime]);
};

export default useWindowResize;
