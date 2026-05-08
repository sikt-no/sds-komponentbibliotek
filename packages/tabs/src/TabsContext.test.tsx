import { renderHook } from "@testing-library/react";
import { useContext } from "react";
import { TabsContext } from "./Tabs";

describe("TabsContext", () => {
  it("has a default value of null", () => {
    const { result } = renderHook(() => useContext(TabsContext));
    expect(result.current).toBeNull();
  });
});
