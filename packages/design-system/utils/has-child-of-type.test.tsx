/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-fragments */
import { Fragment } from "react";
import { hasChildOfType } from "./has-child-of-type";

const Target = () => null;
const Other = () => null;

describe("hasChildOfType", () => {
  it("returns true when a direct child matches", () => {
    expect(hasChildOfType([<Target key="a" />], Target)).toBe(true);
  });

  it("returns false when no child matches", () => {
    expect(hasChildOfType([<Other key="a" />], Target)).toBe(false);
  });

  it("finds a match among several children", () => {
    expect(
      hasChildOfType(
        [<Other key="a" />, <Target key="b" />, <Other key="c" />],
        Target,
      ),
    ).toBe(true);
  });

  it("ignores nested descendants (direct children only)", () => {
    expect(
      hasChildOfType(
        <Other>
          <Target />
        </Other>,
        Target,
      ),
    ).toBe(false);
  });

  // Gotcha: Children.toArray does NOT flatten fragments — a <>...</> is
  // returned as a single child whose `type` is Fragment. Consumers who wrap
  // sub-components in a fragment will be invisible to this check.
  it("does not see through fragments", () => {
    expect(
      hasChildOfType(
        <Fragment>
          <Target />
        </Fragment>,
        Target,
      ),
    ).toBe(false);
    expect(
      hasChildOfType(
        [
          <Other key="a" />,
          <Fragment key="f">
            <Target />
          </Fragment>,
        ],
        Target,
      ),
    ).toBe(false);
  });

  it("ignores non-element children", () => {
    expect(hasChildOfType(["text", null, undefined, 42], Target)).toBe(false);
  });
});
