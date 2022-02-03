import { TOGGLE_THEME } from "./actions";
import { TAction_Theme, TState_theme } from "./types";

const initialState: TState_theme = {
  isDarkMode: false,
};

export default function reducer(
  state: TState_theme = initialState,
  action: TAction_Theme
) {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}
