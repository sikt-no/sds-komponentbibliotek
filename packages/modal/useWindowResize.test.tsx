import { act, renderHook } from "@testing-library/react";
import useWindowResize from "./useWindowResize";

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
    renderHook(() => useWindowResize(callback, { throttleTime }));
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    jest.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("should throttle the callback function when window is resized", () => {
    const callback = jest.fn();
    const throttleTime = 200;
    renderHook(() => useWindowResize(callback));
    act(() => {
      global.dispatchEvent(new Event("resize"));
      global.dispatchEvent(new Event("resize"));
      global.dispatchEvent(new Event("resize"));
    });
    act(() => {
      jest.advanceTimersByTime(throttleTime);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    act(() => {
      jest.advanceTimersByTime(throttleTime);
    });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("should add and remove event listener on mount and unmount", () => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const callback = jest.fn();
    const throttleTime = 200;
    const { unmount } = renderHook(() =>
      useWindowResize(callback, { throttleTime }),
    );

    expect(window.addEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
    unmount();
    expect(window.removeEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
  });
});
