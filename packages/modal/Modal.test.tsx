import React from "react";
import { act, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Modal } from "./Modal";
import userEvent from "@testing-library/user-event";

describe("Modal", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const headingText = "Test Heading";
      const subheadingText = "Test Subtitle";
      const { container } = render(
        <Modal
          ariaHideApp={false}
          open
          onClose={jest.fn()}
          heading={headingText}
          subheading={subheadingText}
          footer={<button key="primary">Click me!</button>}
        >
          <p>Modal content</p>
        </Modal>
      );
      await act(async () => {
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  it("should use aria-label if provided and labelledby and describedby are undefined", () => {
    const ariaLabel = "Modal ARIA Label";
    render(
      <Modal
        footer={[<button key="primary">Click me!</button>]}
        ariaHideApp={false}
        heading="Modal Heading"
        onClose={jest.fn()}
        open
        aria-label={ariaLabel}
      >
        <p>Modal content</p>
      </Modal>
    );
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toHaveAttribute("aria-label", ariaLabel);
    expect(modalElement).not.toHaveAttribute("aria-labelledby");
    expect(modalElement).not.toHaveAttribute("aria-describedby");
  });

  it("should use heading and subheading as labelledby and describedby if aria-label is not provided", () => {
    const headingText = "Test Heading";
    const subheadingText = "Test Subtitle";

    render(
      <Modal
        footer={[<button key="primary">Click me!</button>]}
        ariaHideApp={false}
        heading={headingText}
        subheading={subheadingText}
        onClose={jest.fn()}
        open
      >
        <p>Modal content</p>
      </Modal>
    );
    const modalElement = screen.getByRole("dialog");
    const headingsId = screen.getByTestId("headings").id;
    const contentId = screen.getByTestId("content").id;
    expect(modalElement).not.toHaveAttribute("aria-label");
    expect(modalElement).toHaveAttribute("aria-labelledby", headingsId);
    expect(modalElement).toHaveAttribute("aria-describedby", contentId);
  });

  test("renders correctly with heading and close button", async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    const headingText = "Test Heading";
    const closeButtonText = "Close";
    render(
      <Modal
        ariaHideApp={false}
        open
        onClose={handleClose}
        heading={headingText}
        closeButtonLabel={closeButtonText}
        footer={[<button key="primary">Click me!</button>]}
      >
        <p>Modal Content</p>
      </Modal>
    );

    // Check if the heading is rendered correctly
    const headingElement = screen.getByRole("heading", { name: headingText });
    expect(headingElement).toBeInTheDocument();

    // Check if the content is rendered correctly
    const contentElement = screen.getByText(/Modal Content/i);
    expect(contentElement).toBeInTheDocument();

    // Check if the footer is rendered correctly
    const footerButton = screen.getByRole("button", { name: /Click me!/i });
    expect(footerButton).toBeInTheDocument();

    // Check if the close button is rendered correctly
    const closeButton = screen.getByRole("button", { name: closeButtonText });
    expect(closeButton).toBeInTheDocument();

    // Simulate a click on the close button
    await act(async () => {
      await user.click(closeButton);
    });

    // Check if the onClose function is called
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does handle not dismissable modifier, hides close button", async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    const closeButtonText = "Close";
    render(
      <Modal
        ariaHideApp={false}
        closeButtonLabel={closeButtonText}
        dismissable={false}
        open
        onClose={handleClose}
        heading="Test heading"
        footer={[<button key="primary">Click me!</button>]}
      >
        <p>Modal Content</p>
      </Modal>
    );

    // Check that close button is not rendered
    const closeButton = screen.queryByText(/Close/i);
    expect(closeButton).not.toBeInTheDocument();

    await act(async () => {
      await user.keyboard("[Escape]");
    });

    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it("onClose-callback is called when user press ESC", async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    render(
      <Modal
        footer={[<button key="primary">Click me!</button>]}
        ariaHideApp={false}
        open
        onClose={handleClose}
        heading="Test heading"
      >
        <p>Modal Content</p>
      </Modal>
    );

    await act(async () => {
      await user.keyboard("[Escape]");
    });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("setting appElement with Modal.setAppElement will hide it from screen readers ", () => {
    const appElement = document.createElement("div");
    appElement.setAttribute("id", "app");
    document.body.appendChild(appElement);
    expect(appElement).not.toHaveAttribute("aria-hidden", "true");
    Modal.setAppElement("#app");

    render(
      <Modal
        footer={[<button key="primary">Click me!</button>]}
        open
        onClose={jest.fn()}
        heading="Example heading"
      >
        <p>Modal content</p>
      </Modal>
    );

    expect(appElement).toHaveAttribute("aria-hidden", "true");
  });
});
