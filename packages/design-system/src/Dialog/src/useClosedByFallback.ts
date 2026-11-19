import { useEffect, type RefObject } from "react";

// Safari lacks native `closedby="any"`. Press- and release-outside both
// required so text-selection drags that end on the backdrop don't dismiss.
export const useClosedByFallback = (
  dialogRef: RefObject<HTMLDialogElement | null>,
  closedby: "any" | "closerequest" | "none",
) => {
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if ("closedBy" in HTMLDialogElement.prototype) return;
    if (closedby !== "any") return;

    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };
    let pressedOutside = false;
    const onDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) dialog.close();
    };
    dialog.addEventListener("pointerdown", onDown);
    dialog.addEventListener("pointerup", onUp);
    return () => {
      dialog.removeEventListener("pointerdown", onDown);
      dialog.removeEventListener("pointerup", onUp);
    };
  }, [dialogRef, closedby]);
};
