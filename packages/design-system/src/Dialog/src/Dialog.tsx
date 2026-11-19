import { clsx } from "clsx/lite";
import { useRef, type DialogHTMLAttributes, type Ref } from "react";
import "invokers-polyfill";
import { DialogClose } from "./DialogClose";
import { DialogContent } from "./DialogContent";
import { DialogContext } from "./DialogContext";
import { DialogFooter } from "./DialogFooter";
import { DialogHeader } from "./DialogHeader";
import { DialogSubtitle } from "./DialogSubtitle";
import { useClosedByFallback } from "./useClosedByFallback";
import "./dialog.css";

// React 19 types don't ship the Invoker Commands attributes yet.
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ButtonHTMLAttributes<T> {
    command?: string;
    commandfor?: string;
  }
}

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  /** DOM id. Targeted by `commandfor` on an opener/closer `<Button>`. */
  id: string;
  /** How the dialog can be dismissed. */
  closedby?: "any" | "closerequest" | "none";
  /** Ref to the underlying `<dialog>` for imperative `showModal()` / `close()`. */
  ref?: Ref<HTMLDialogElement>;
}

const DialogRoot = ({
  ref: externalRef,
  id,
  closedby = "any",
  className,
  children,
  ...rest
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const setRef = (el: HTMLDialogElement | null) => {
    dialogRef.current = el;
    if (typeof externalRef === "function") externalRef(el);
    else if (externalRef) externalRef.current = el;
  };
  useClosedByFallback(dialogRef, closedby);

  return (
    <dialog
      ref={setRef}
      id={id}
      // eslint-disable-next-line react/no-unknown-property
      closedby={closedby}
      className={clsx("sd3-dialog", className)}
      {...rest}
    >
      <DialogContext.Provider value={{ id }}>{children}</DialogContext.Provider>
    </dialog>
  );
};
DialogRoot.displayName = "Dialog";

export const Dialog = Object.assign(DialogRoot, {
  Header: DialogHeader,
  Subtitle: DialogSubtitle,
  Content: DialogContent,
  Footer: DialogFooter,
  Close: DialogClose,
});
