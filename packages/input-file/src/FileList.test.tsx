import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { FileList } from "./FileList";
import { ByteConversion, FileListItem } from "./FileListItem";

const renderComponent = (conversion: ByteConversion = "decimal") =>
  render(
    <FileList
      figCaption="Fig caption"
      className="test-class-name"
      data-testid="test"
    >
      <FileListItem
        removeActionProps={{ label: "Remove Foo", onClick: jest.fn() }}
        fileSize={1466607}
        bytesConversion={conversion}
      >
        Foo
      </FileListItem>
      <FileListItem
        removeActionProps={{ label: "Remove Bar", onClick: jest.fn() }}
        fileSize={1024}
        loading
        progressProps={{ label: "Loading Bar", value: 54 }}
        bytesConversion={conversion}
      >
        Bar
      </FileListItem>
      <FileListItem
        removeActionProps={{ label: "Remove Baz", onClick: jest.fn() }}
        fileSize={100}
        errorText="Error"
        bytesConversion={conversion}
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

    it("should have decimal file sizes", async () => {
      renderComponent();

      expect(screen.getByText("1.47MB")).toBeInTheDocument();
      expect(screen.getByText("1.02KB")).toBeInTheDocument();
      expect(screen.getByText("100B")).toBeInTheDocument();
    });

    it("should have binary file sizes", async () => {
      renderComponent("binary");

      expect(screen.getByText("1.4MB")).toBeInTheDocument();
      expect(screen.getByText("1KB")).toBeInTheDocument();
      expect(screen.getByText("100B")).toBeInTheDocument();
    });

    it("should have progress", async () => {
      renderComponent();

      expect(screen.getByText("54%")).toBeInTheDocument();
    });
  });
});
