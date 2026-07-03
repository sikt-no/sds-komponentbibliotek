import { FieldsetState, useFieldset } from "@sikt/sds-form";
import { ChangeEvent, createContext, useContext, useMemo } from "react";

export interface RadioFieldsetState {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const RadioFieldsetContext = createContext<
  RadioFieldsetState | undefined
>(undefined);

export default function useRadioFieldset():
  (RadioFieldsetState & FieldsetState) | undefined {
  const fieldsetContext = useFieldset();
  const radioFieldsetContext = useContext(RadioFieldsetContext);

  return useMemo(
    () => ({ ...fieldsetContext, ...radioFieldsetContext }),
    [fieldsetContext, radioFieldsetContext],
  );
}
