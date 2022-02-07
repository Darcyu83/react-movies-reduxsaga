import {
  getMoviesAct,
  getMoviesActError,
  getMoviesActSuccess,
  GET_MOVIES,
} from "./actions";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { Type_MovieAction } from "./types";
import { getMoviesAPI, IMovie } from "../../api/moviesAPI";

function* getMoviesSaga(action: Type_MovieAction) {
  try {
    const data: IMovie[] = yield call(getMoviesAPI);
    yield put(getMoviesActSuccess(data));
  } catch (error: any) {
    yield put(getMoviesActError(error));
  }
}
export function* moviesSaga() {
  yield takeLatest(GET_MOVIES, getMoviesSaga);
}
