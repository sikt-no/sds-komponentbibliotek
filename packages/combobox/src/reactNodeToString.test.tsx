import { reactNodeToString } from "./reactNodeToString";

describe("renderNodeToString", () => {
  it("renders string type", () => {
    expect(reactNodeToString("foo")).toBe("foo");
  });

  it("renders number type", () => {
    expect(reactNodeToString(1)).toBe("1");
  });

  it("renders array type", () => {
    expect(reactNodeToString(["foo", 1])).toBe("foo1");
  });

  it("renders ReactElement type", () => {
    expect(
      reactNodeToString(
        <>
          foo <span>bar</span>
        </>,
      ),
    ).toBe("foo bar");
  });
});
