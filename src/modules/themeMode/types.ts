import { toggleTheme } from "./actions";

export interface TState_theme {
  isDarkMode: boolean;
}

export type TAction_Theme = ReturnType<typeof toggleTheme>;
