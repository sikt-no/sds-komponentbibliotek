import { ChangeEvent, createContext, useContext } from "react";

export interface RadioFieldsetState {
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: boolean;
}

export const RadioFieldsetContext = createContext<
  RadioFieldsetState | undefined
>(undefined);

export default function useRadioFieldset(): RadioFieldsetState | undefined {
  return useContext(RadioFieldsetContext);
}
