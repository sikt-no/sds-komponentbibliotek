import { fireEvent, renderHook } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useKeydown } from "./useKeydown";

describe("useKeydown", () => {
  it("should call callback on keydown with correct key", async () => {
    const ref = { current: document.createElement("button") };
    const callback = jest.fn();

    renderHook(() => {
      useKeydown(ref, "Escape", callback);
    });

    expect(callback).not.toHaveBeenCalled();

    fireEvent.keyDown(ref.current, { key: "Escape" });

    expect(callback).toHaveBeenCalledWith(expect.any(KeyboardEvent));
  });

  it("should not call callback on keydown with incorrect key", async () => {
    const ref = { current: document.createElement("div") };
    const callback = jest.fn();

    renderHook(() => {
      useKeydown(ref, "Escape", callback);
    });

    expect(callback).not.toHaveBeenCalled();

    fireEvent.keyDown(ref.current, { key: "Enter" });

    expect(callback).not.toHaveBeenCalled();
  });

  it("should call callback on document keydown with correct key", async () => {
    const user = userEvent.setup();
    const callback = jest.fn();

    renderHook(() => {
      useKeydown(null, "Escape", callback);
    });

    expect(callback).not.toHaveBeenCalled();

    await user.keyboard("{Escape}");

    expect(callback).toHaveBeenCalledWith(expect.any(KeyboardEvent));
  });
});
