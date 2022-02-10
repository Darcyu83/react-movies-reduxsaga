import { Type_Movies_Data } from "./types";

export const GET_MOVIES = "movies/GET_MOVIES" as const;
export const GET_MOVIES_SUCCESS = "movies/GET_MOVIES_SUCCESS" as const;
export const GET_MOVIES_ERROR = "movies/GET_MOVIES_ERROR" as const;

export const getMoviesAct = () => ({ type: GET_MOVIES });
export const getMoviesActSuccess = (payload: Type_Movies_Data) => ({
  type: GET_MOVIES_SUCCESS,
  payload,
});

export const getMoviesActError = (payload: any) => ({
  type: GET_MOVIES_ERROR,
  payload,
});
