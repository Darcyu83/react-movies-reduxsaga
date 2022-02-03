import { IMovie } from "../../api/moviesAPI";
import {
  getMoviesAct,
  getMoviesActSuccess,
  getMoviesActError,
} from "./actions";

export interface Type_InitialState {
  isLoading: boolean;
  error: any;
  errorState: boolean;
  data: IMovie[];
}
export type Type_MovieAction =
  | ReturnType<typeof getMoviesAct>
  | ReturnType<typeof getMoviesActSuccess>
  | ReturnType<typeof getMoviesActError>;
