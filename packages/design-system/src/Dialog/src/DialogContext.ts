import { createContext, useContext } from "react";

export interface DialogContextValue {
  id: string;
}

export const DialogContext = createContext<DialogContextValue | null>(null);

export const useDialogContext = (): DialogContextValue => {
  const ctx = useContext(DialogContext);
  if (ctx === null) {
    throw new Error("Dialog.Close must be used inside a <Dialog>.");
  }
  return ctx;
};
