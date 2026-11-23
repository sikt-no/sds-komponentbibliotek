# Jest tests — `src/<PascalCase>.test.tsx`

Reference: `packages/design-system/src/Badge/src/Badge.test.tsx`. Open it before writing.

## Scope — test the code we write, nothing else

- **Only test the contract this component adds.** Props → `data-*` mapping, conditional rendering, sub-component detection, handlers firing with the right args, `asChild` delegation, boolean-state attribute presence/absence, a11y violations surfaced by jest-axe.
- **Do not test HTML / the browser.** A real `<button>` activates on Enter and Space. A real `<a>` navigates on click. `<form>` submits on Enter. `disabled` blocks click. `<input type="search">` clears on Esc. Those are web-platform guarantees — testing them tests the browser, not us. If a handler would just assert `fireEvent.keyDown('Enter')` on a native `<button>` triggers `onClick`, delete it.
- **Do not test React.** No ref-forwarding test for its own sake. No `Children.toArray` plumbing test. No "does spread work" test. TypeScript already covers these at compile time.
- **Do not test appearance.** Pixels, colour contrast, focus-ring rendering, hover state — those belong to Playwright. If an assertion is "does the component look different", drop it from Jest.

See the "Jest vs Playwright — no overlap" section in `SKILL.md`. `asChild` delegation IS our contract (not React's) — keep that test.

**Coverage floor is still 80% per-file** (`jest.config.mjs`), and that stays non-negotiable. Hit it by covering every branch of the code we write — each variant, each boolean state, each handler, each sub-component detection path, each conditional render. If coverage drops because you removed a native-HTML or React-plumbing test, the fix is to add a test for a real component branch, not to re-add the removed one and not to lower the threshold.

## Rules

- One `axe` test per variant in `describe("a11y")`.
- Group by dimension, not interleaved. Order in `describe("api")`: root/class/defaults → `describe("variant")` → `describe("theme")` → `describe("size")` → booleans → handlers.
- One `it` per variant asserting the `data-*` is set.
- `getByRole` when the SPEC element has a role. `getByTestId` only when role can't resolve (multiple same-role elements; asserting root before children).
- Booleans tested in both branches (present when true, absent when false).
- Every SPEC handler exercised via `userEvent.setup()`.
- Import from `./<PascalCase>` (sibling), not `../index`.

## Shape

```tsx
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { <PascalCase> } from "./<PascalCase>";

const variants = ["strong", "subtle", "critical"] as const;

describe("<PascalCase>", () => {
  describe("a11y", () => {
    variants.forEach((variant) => {
      it(`variant=${variant} is accessible`, async () => {
        const { container } = render(<<PascalCase> variant={variant} />);
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    it("renders with the root class", () => {
      render(<<PascalCase> data-testid="t" />);
      expect(screen.getByTestId("t")).toHaveClass("sd3-<kebab>");
    });

    describe("variant", () => {
      variants.forEach((variant) => {
        it(`sets data-variant='${variant}'`, () => {
          render(<<PascalCase> data-testid="t" variant={variant} />);
          expect(screen.getByTestId("t")).toHaveAttribute("data-variant", variant);
        });
      });
    });

    // then describe("size"), booleans, handlers …
  });
});
```
