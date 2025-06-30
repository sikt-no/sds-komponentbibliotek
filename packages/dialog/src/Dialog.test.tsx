import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Dialog } from "./Dialog";

describe("Dialog", () => {
  /* This block is needed as there is currently no support for Dialog methods in the testing framework. */
  /* jsdom currently does not support the element: https://github.com/jsdom/jsdom/issues/3294 */
  /* Once resolved, this block can be removed. */
  beforeAll(() => {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    HTMLDialogElement.prototype.show = jest.fn(function () {
      this.open = true;
    });

    HTMLDialogElement.prototype.showModal = jest.fn(function () {
      this.open = true;
    });

    HTMLDialogElement.prototype.close = jest.fn(function () {
      this.open = false;
    });
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
  });

  describe("a11y", () => {
    it("should be accessible", async () => {
      const headingText = "Test Heading";
      const subheadingText = "Test Subtitle";
      const { container } = render(
        <Dialog
          open
          onClose={jest.fn()}
          heading={headingText}
          subheading={subheadingText}
          closeButtonLabel="Close dialog"
          footer={<button key="primary">Click me!</button>}
          dismissable
        >
          <p>Dialog content</p>
        </Dialog>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should use aria-label if provided and labelledby and describedby are undefined", () => {
      const ariaLabel = "Dialog ARIA Label";
      render(
        <Dialog
          footer={[<button key="primary">Click me!</button>]}
          heading="Dialog Heading"
          onClose={jest.fn()}
          open
          aria-label={ariaLabel}
          closeButtonLabel="Close dialog"
          dismissable
        >
          <p>Dialog content</p>
        </Dialog>,
      );
      const dialogElement = screen.getByRole("dialog");
      expect(dialogElement).toHaveAttribute("aria-label", ariaLabel);
      expect(dialogElement).not.toHaveAttribute("aria-labelledby");
      expect(dialogElement).not.toHaveAttribute("aria-describedby");
    });

    it("should use heading and subheading as labelledby and describedby if aria-label is not provided", () => {
      const headingText = "Test Heading";
      const subheadingText = "Test Subtitle";

      render(
        <Dialog
          footer={[<button key="primary">Click me!</button>]}
          heading={headingText}
          subheading={subheadingText}
          onClose={jest.fn()}
          closeButtonLabel="Close dialog"
          dismissable
          open
        >
          <p>Dialog content</p>
        </Dialog>,
      );
      const dialogElement = screen.getByRole("dialog");
      const headingsId = screen.getByTestId("headings").id;
      const contentId = screen.getByTestId("content").id;
      expect(dialogElement).not.toHaveAttribute("aria-label");
      expect(dialogElement).toHaveAttribute("aria-labelledby", headingsId);
      expect(dialogElement).toHaveAttribute("aria-describedby", contentId);
    });

    it("renders correctly with heading and close button", async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();
      const headingText = "Test Heading";
      const closeButtonText = "Close ARIA";
      render(
        <Dialog
          open
          onClose={handleClose}
          heading={headingText}
          closeButtonAriaLabel={closeButtonText}
          footer={[<button key="primary">Click me!</button>]}
          dismissable
        >
          <p>Dialog Content</p>
        </Dialog>,
      );

      // Check if the heading is rendered correctly
      const headingElement = screen.getByRole("heading", { name: headingText });
      expect(headingElement).toBeInTheDocument();

      // Check if the content is rendered correctly
      const contentElement = screen.getByText(/Dialog Content/i);
      expect(contentElement).toBeInTheDocument();

      // Check if the footer is rendered correctly
      const footerButton = screen.getByRole("button", { name: /Click me!/i });
      expect(footerButton).toBeInTheDocument();

      // Check if the close button is rendered correctly
      const closeButton = screen.getByRole("button", {
        name: closeButtonText,
      });
      expect(closeButton).toBeInTheDocument();

      await user.click(closeButton);

      // Check if the onClose function is called
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("hides and shows the close button based on changes to dismissable prop", async () => {
      const handleClose = jest.fn();
      const closeButtonText = "Close";

      const { rerender } = render(
        <Dialog
          dismissable={false}
          open
          onClose={handleClose}
          heading="Test heading"
          footer={[<button key="primary">Click me!</button>]}
        >
          <p>Dialog Content</p>
        </Dialog>,
      );

      let closeButton = screen.queryByText(/Close/i);
      expect(closeButton).not.toBeInTheDocument();

      rerender(
        <Dialog
          closeButtonLabel={closeButtonText}
          open
          onClose={handleClose}
          heading="Test heading"
          footer={[<button key="primary">Click me!</button>]}
        >
          <p>Dialog Content</p>
        </Dialog>,
      );

      closeButton = screen.queryByText(/Close/i);
      expect(closeButton).toBeInTheDocument();
    });

    it("opens and closes dialog based on changes to open prop", async () => {
      const handleClose = jest.fn();
      const { rerender } = render(
        <Dialog
          footer={[<button key="primary">Click me!</button>]}
          open={false}
          onClose={handleClose}
          heading="Test heading"
          dismissable
          closeButtonLabel="Close dialog"
        >
          <p>Dialog Content</p>
        </Dialog>,
      );

      const headerElement = screen.getByText(/Test heading/i);

      expect(headerElement).not.toBeVisible();

      rerender(
        <Dialog
          footer={[<button key="primary">Click me!</button>]}
          open
          onClose={handleClose}
          heading="Test heading"
          dismissable
          closeButtonLabel="Close dialog"
        >
          <p>Dialog Content</p>
        </Dialog>,
      );

      expect(headerElement).toBeVisible();
    });
  });

  it("closes dialog when user presses escape key", async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    render(
      <Dialog
        footer={[<button key="primary">Click me!</button>]}
        open
        onClose={handleClose}
        heading="Test heading"
        dismissable
        closeButtonLabel="Close dialog"
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    await user.keyboard("[Escape]");
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not close non-dismissable dialog when user presses escape key", async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    render(
      <Dialog
        footer={[<button key="primary">Click me!</button>]}
        open
        dismissable={false}
        onClose={handleClose}
        heading="Test heading"
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    await user.keyboard("[Escape]");
    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it("closes dialog (modal) when click outside wrapper", async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    render(
      <Dialog
        footer={[<button key="primary">Click me!</button>]}
        open
        onClose={handleClose}
        heading="Test heading"
        dismissable
        closeButtonLabel="Close dialog"
        data-testid="test"
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    await user.click(screen.getByTestId("test"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not close dialog (non-modal) when click outside wrapper", async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    render(
      <Dialog
        footer={[<button key="primary">Click me!</button>]}
        open
        modal={false}
        onClose={handleClose}
        heading="Test heading"
        closeButtonLabel="Close dialog"
        data-testid="test"
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    await user.click(screen.getByTestId("test"));

    expect(handleClose).toHaveBeenCalledTimes(0);
  });
});
