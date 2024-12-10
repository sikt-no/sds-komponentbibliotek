import { renderHook } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useClickOutside } from "./useClickOutside";

describe("useClickOutside", () => {
  it("should call callback on click outside", async () => {
    const user = userEvent.setup();
    const ref = { current: document.createElement("div") };
    const callback = jest.fn();

    renderHook(() => {
      useClickOutside(ref, callback);
    });

    expect(callback).not.toHaveBeenCalled();

    await user.click(document.body);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not call callback on click inside", async () => {
    const user = userEvent.setup();
    const ref = { current: document.createElement("div") };
    const callback = jest.fn();

    renderHook(() => {
      useClickOutside(ref, callback);
    });

    expect(callback).not.toHaveBeenCalled();

    await user.click(ref.current);

    expect(callback).not.toHaveBeenCalled();
  });
});
