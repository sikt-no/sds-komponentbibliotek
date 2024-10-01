import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { FileList } from "./FileList";
import { FileListItem } from "./FileListItem";

const renderComponent = () =>
  render(
    <FileList
      figCaption="Fig caption"
      className="test-class-name"
      data-testid="test"
    >
      <FileListItem
        actionProps={{ label: "Remove Foo", onClick: jest.fn() }}
        fileSize={1466607}
      >
        Foo
      </FileListItem>
      <FileListItem
        actionProps={{ label: "Remove Bar", onClick: jest.fn() }}
        fileSize={1000}
        loading
        progressProps={{ label: "Loading Bar", value: 54 }}
      >
        Bar
      </FileListItem>
      <FileListItem
        actionProps={{ label: "Remove Baz", onClick: jest.fn() }}
        fileSize={100}
        errorText="Error"
      >
        Baz
      </FileListItem>
    </FileList>,
  );

describe("FileList", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = renderComponent();

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      renderComponent();

      expect(screen.getByTestId("test")).toHaveClass("sds-input-file-list");
      expect(screen.queryByText("%")).not.toBeInTheDocument();
      expect(screen.queryByText("MB")).not.toBeInTheDocument();
    });

    it("should have class name", async () => {
      renderComponent();

      expect(screen.getByTestId("test")).toHaveClass("sds-input-file-list");
    });

    it("should have file size", async () => {
      renderComponent();

      expect(screen.getByText("1.47MB")).toBeInTheDocument();
      expect(screen.getByText("1KB")).toBeInTheDocument();
      expect(screen.getByText("100B")).toBeInTheDocument();
    });

    it("should have progress", async () => {
      renderComponent();

      expect(screen.getByText("54%")).toBeInTheDocument();
    });
  });
});
