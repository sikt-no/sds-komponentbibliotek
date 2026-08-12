import { renderHook } from "@testing-library/react";
import { useFormFieldIds } from "./useFormFieldIds";

describe("useFormFieldIds", () => {
  it("generates a stable id and derives error/help text ids from it", () => {
    const { result } = renderHook(() => useFormFieldIds());

    expect(result.current.id).toBeTruthy();
    expect(result.current.errorTextId).toBe(`${result.current.id}-error-text`);
    expect(result.current.helpTextId).toBe(`${result.current.id}-help-text`);
  });

  it("returns undefined aria attributes when neither text is provided", () => {
    const { result } = renderHook(() => useFormFieldIds());

    expect(result.current.ariaDescribedBy).toBeUndefined();
    expect(result.current.ariaErrorMessage).toBeUndefined();
  });

  it("adds only helpTextId to aria-describedby when only helpText is provided", () => {
    const { result } = renderHook(() => useFormFieldIds({ helpText: "Help" }));

    expect(result.current.ariaDescribedBy).toBe(result.current.helpTextId);
    expect(result.current.ariaErrorMessage).toBeUndefined();
  });

  it("adds only errorTextId to aria-describedby and sets aria-errormessage when only errorText is provided", () => {
    const { result } = renderHook(() =>
      useFormFieldIds({ errorText: "Error" }),
    );

    expect(result.current.ariaDescribedBy).toBe(result.current.errorTextId);
    expect(result.current.ariaErrorMessage).toBe(result.current.errorTextId);
  });

  it("puts error id before help id in aria-describedby when both are provided", () => {
    const { result } = renderHook(() =>
      useFormFieldIds({ errorText: "Error", helpText: "Help" }),
    );

    expect(result.current.ariaDescribedBy).toBe(
      `${result.current.errorTextId} ${result.current.helpTextId}`,
    );
    expect(result.current.ariaErrorMessage).toBe(result.current.errorTextId);
  });

  it("treats empty-string errorText as absent", () => {
    const { result } = renderHook(() =>
      useFormFieldIds({ errorText: "", helpText: "Help" }),
    );

    expect(result.current.ariaDescribedBy).toBe(result.current.helpTextId);
    expect(result.current.ariaErrorMessage).toBeUndefined();
  });
});
