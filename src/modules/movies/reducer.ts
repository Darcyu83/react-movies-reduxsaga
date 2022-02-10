import { GET_MOVIES, GET_MOVIES_ERROR, GET_MOVIES_SUCCESS } from "./actions";
import { Type_InitialState, Type_MovieAction } from "./types";

const initialState: Type_InitialState = {
  isLoading: false,
  error: "",
  errorState: false,
  data: { popularData: [], topRatedData: [] },
};

function reducer(
  state: Type_InitialState = initialState,
  action: Type_MovieAction
) {
  console.log("movie Reducer start == 1 ");
  switch (action.type) {
    case GET_MOVIES:
      console.log("movie Reducer start == 2 ");
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS:
      console.log("movie Reducer start == 3 ");
      return { ...state, isLoading: false, data: action.payload };
    case GET_MOVIES_ERROR:
      console.log("movie Reducer start == 4 ");
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        errorState: true,
      };
    default:
      return state;
  }
}

export default reducer;
