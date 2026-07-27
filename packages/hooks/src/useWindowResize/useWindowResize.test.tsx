import { renderHook } from "@testing-library/react";
import { useWindowResize } from "./useWindowResize";

describe("useWindowResize", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should call the callback function when window is resized", () => {
    const callback = jest.fn();
    const throttleTime = 200;
    renderHook(() => {
      useWindowResize(callback, { throttleTime });
    });
    global.dispatchEvent(new Event("resize"));
    jest.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("should throttle the callback function when window is resized", () => {
    const callback = jest.fn();
    const throttleTime = 200;
    renderHook(() => {
      useWindowResize(callback);
    });
    global.dispatchEvent(new Event("resize"));
    global.dispatchEvent(new Event("resize"));
    global.dispatchEvent(new Event("resize"));
    jest.advanceTimersByTime(throttleTime);

    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(throttleTime);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("should add and remove event listener on mount and unmount", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
    const callback = jest.fn();
    const throttleTime = 200;
    const { unmount } = renderHook(() => {
      useWindowResize(callback, { throttleTime });
    });

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
  });
});
