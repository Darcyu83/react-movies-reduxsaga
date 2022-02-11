import { getMoviesActError, getMoviesActSuccess, GET_MOVIES } from "./actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { Type_MovieAction, Type_Movies_Data } from "./types";
import {
  fetchInParallel,
  getPopularMoviesAPI,
  getTopRatedMoviesAPI,
  IMovie,
} from "../../api/moviesAPI";

function* getMoviesSaga(action: Type_MovieAction) {
  try {
    const popularData: IMovie[] = yield call(getPopularMoviesAPI);
    const topRatedData: IMovie[] = yield call(getTopRatedMoviesAPI);
    const data = { popularData, topRatedData };
    yield put(getMoviesActSuccess(data));
  } catch (error: any) {
    yield put(getMoviesActError(error));
  }
}
export function* moviesSaga() {
  yield takeLatest(GET_MOVIES, getMoviesSaga);
}
