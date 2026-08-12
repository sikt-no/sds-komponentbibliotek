import { type ReactNode, useId } from "react";

export interface UseFormFieldIdsOptions {
  /** Visible error text. When present, contributes to `aria-describedby` and drives `aria-errormessage`. */
  errorText?: ReactNode;
  /** Visible help text. When present, contributes to `aria-describedby`. */
  helpText?: ReactNode;
}

export interface UseFormFieldIdsResult {
  /** Stable id for the field control. Bind to `htmlFor` on the label and `id` on the input. */
  id: string;
  /** Id for the error-text element. Bind to the `HelpText` that renders `errorText`. */
  errorTextId: string;
  /** Id for the help-text element. Bind to the `HelpText` that renders `helpText`. */
  helpTextId: string;
  /** Space-separated id list for `aria-describedby`, or `undefined` when neither text is shown. */
  ariaDescribedBy: string | undefined;
  /** `errorTextId` when `errorText` is present, otherwise `undefined`. Bind to `aria-errormessage`. */
  ariaErrorMessage: string | undefined;
}

/**
 * Generates the ids and aria attributes for a form field with optional
 * error/help text. Keeps the WAI-ARIA `aria-describedby` / `aria-errormessage`
 * wiring consistent across every form-field component in the library.
 */
export const useFormFieldIds = ({
  errorText,
  helpText,
}: UseFormFieldIdsOptions = {}): UseFormFieldIdsResult => {
  const id = useId();

  const errorTextId = `${id}-error-text`;
  const helpTextId = `${id}-help-text`;

  const hasError = Boolean(errorText);
  const hasHelp = Boolean(helpText);

  const describedByIds: string[] = [];

  if (hasError) {
    describedByIds.push(errorTextId);
  }
  if (hasHelp) {
    describedByIds.push(helpTextId);
  }

  const ariaDescribedBy = describedByIds.length
    ? describedByIds.join(" ")
    : undefined;

  const ariaErrorMessage = hasError ? errorTextId : undefined;

  return {
    id,
    errorTextId,
    helpTextId,
    ariaDescribedBy,
    ariaErrorMessage,
  };
};
