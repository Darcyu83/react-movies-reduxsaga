import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useMatch } from "react-router-dom";
import { Type_RootState } from "../modules";
import { getMoviesAct } from "../modules/movies/actions";

export default function MovieHome() {
  const { data, isLoading, error, errorState } = useSelector(
    (state: Type_RootState) => state.movies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect() ;; ");
    dispatch(getMoviesAct());
  }, [dispatch]);

  console.log("movies---", data, isLoading, error, errorState);

  const detailMatched = useMatch("/movies/detail");
  return (
    <div>
      MovieHome
      {/* {detailMatched && (
        <div>
          <p>Movie Name : detail</p>
          <Outlet />
        </div>
      )} */}
    </div>
  );
}
