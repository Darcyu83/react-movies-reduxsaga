import { IMovie } from "../../api/moviesAPI";

export const GET_MOVIES = "movies/GET_MOVIES" as const;
export const GET_MOVIES_SUCCESS = "movies/GET_MOVIES_SUCCESS" as const;
export const GET_MOVIES_ERROR = "movies/GET_MOVIES_ERROR" as const;

export const getMoviesAct = () => ({ type: GET_MOVIES });
export const getMoviesActSuccess = (payload: IMovie[]) => ({
  type: GET_MOVIES_SUCCESS,
  payload,
});

export const getMoviesActError = (payload: any) => ({
  type: GET_MOVIES_ERROR,
  payload,
});
