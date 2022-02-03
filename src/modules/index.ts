import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import themeModeReducer from "./themeMode/reducer";
import movieReducer from "./movies/reducer";
import { moviesSaga } from "./movies/sagas";

export const rootReducer = combineReducers({
  themeMode: themeModeReducer,
  movies: movieReducer,
});

export type Type_RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([moviesSaga()]);
}
