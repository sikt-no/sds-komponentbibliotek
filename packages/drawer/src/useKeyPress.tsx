import { useEffect } from "react";

interface UseKeyPressProps {
  keyToWatch: string;
  state: boolean;
  onKeyPress: () => void;
}

export function useKeyPress({
  keyToWatch,
  state,
  onKeyPress,
}: UseKeyPressProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (state && event.key === keyToWatch) {
        onKeyPress();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyToWatch, state, onKeyPress]);
}
