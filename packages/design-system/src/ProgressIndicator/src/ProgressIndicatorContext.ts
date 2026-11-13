import { createContext, useContext } from "react";

export type ProgressIndicatorStepStatus =
  "upcoming" | "current" | "completed" | "critical" | "disabled";

export interface ProgressIndicatorContextValue {
  size: "compact" | "standard" | "expanded";
  statusLabels?: Partial<Record<ProgressIndicatorStepStatus, string>>;
}

export const ProgressIndicatorContext =
  createContext<ProgressIndicatorContextValue>({ size: "standard" });

export const useProgressIndicatorContext = () =>
  useContext(ProgressIndicatorContext);
