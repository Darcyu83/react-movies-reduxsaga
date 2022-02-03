import {
  getMoviesAct,
  getMoviesActError,
  getMoviesActSuccess,
  GET_MOVIES,
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { Type_MovieAction } from "./types";
import { getMoviesAPI, IMovie } from "../../api/moviesAPI";

function* getMoviesSaga(action: Type_MovieAction) {
  console.log("getSaga == 1 ");
  yield put(getMoviesAct());
  try {
    console.log("getSaga == 2 ");
    const data: IMovie[] = yield call(getMoviesAPI);
    console.log("getSaga == 3 ");
    yield put(getMoviesActSuccess(data));
  } catch (error: any) {
    yield put(getMoviesActError(error));
  }
}
export function* moviesSaga() {
  yield takeEvery(GET_MOVIES, getMoviesSaga);
  //yield takeLatest(GET_MOVIES, getMoviesSaga);
}
