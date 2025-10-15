import { useEffect, useReducer } from "react";

interface Action {
  type: ReducerAction;
  payload?: string;
}

enum ReducerAction {
  KeyUp = "KEY_UP",
  Reset = "RESET",
}

interface KonamiState {
  success: boolean;
  code: string[];
  initialCode: string[];
}

const initialState = (
  initialCode: string[] = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
    "Enter",
  ],
): KonamiState => {
  return {
    success: false,
    code: initialCode,
    initialCode,
  };
};

const konamiReducer = (state: KonamiState, action: Action) => {
  switch (action.type) {
    case ReducerAction.KeyUp: {
      if (state.success) {
        return state;
      } else if (state.code[0] === action.payload) {
        const code = state.code.slice(1);

        return {
          ...state,
          success: code.length === 0,
          code,
        };
      }
      return initialState(state.initialCode);
    }
    case ReducerAction.Reset:
      return initialState(state.initialCode);
    default:
      return state;
  }
};

const useKonami = (handler: () => void, options?: { code: string[] }) => {
  const [state, dispatch] = useReducer(
    konamiReducer,
    initialState(options?.code),
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      dispatch({
        type: ReducerAction.KeyUp,
        payload: e.key,
      });
    };

    window.addEventListener("keyup", listener);

    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, []);

  useEffect(() => {
    if (state.success) {
      handler();
      dispatch({ type: ReducerAction.Reset });
    }
  }, [state, handler]);
};

export default useKonami;
