import { useKeyPress } from "./useKeyPress";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

interface Props {
  isExpanded: boolean;
  onKeyPress: () => void;
}

function MockDrawerComponent({ isExpanded, onKeyPress }: Props) {
  useKeyPress({
    state: isExpanded,
    keyToWatch: "Escape",
    onKeyPress,
  });

  return null;
}

describe("useKeyPress", () => {
  const user = userEvent.setup();

  it("should call handleMock on Escape key", async () => {
    const mockHandler = jest.fn();
    const { unmount } = render(
      <MockDrawerComponent isExpanded onKeyPress={mockHandler} />,
    );
    await user.keyboard("{Escape}");

    expect(mockHandler).toHaveBeenCalled();

    unmount();
  });

  it("should not call handleMock on key ArrowUp", async () => {
    const mockHandler = jest.fn();
    const { unmount } = render(
      <MockDrawerComponent isExpanded onKeyPress={mockHandler} />,
    );

    await user.keyboard("{ArrowDown}");
    expect(mockHandler).not.toHaveBeenCalled();

    unmount();
  });
});
