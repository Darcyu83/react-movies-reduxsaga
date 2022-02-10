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
  data: {
    popularData: IMovie[];
    topRatedData: IMovie[];
  };
}
export type Type_MovieAction =
  | ReturnType<typeof getMoviesAct>
  | ReturnType<typeof getMoviesActSuccess>
  | ReturnType<typeof getMoviesActError>;

export type Type_Movies_Data = {
  popularData: IMovie[];
  topRatedData: IMovie[];
};
