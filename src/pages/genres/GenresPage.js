import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import Navigation from "../../components/navigation/Navigation";
import "./genresPage.scss";
import { fetchAsyncMovies, getMoviesStatus } from "../../redux/movies.slice";
import { useEffect } from "react";
import { STATUS } from "../../utils/status";
import Loader from "../../components/loader/Loader";

const GenresPage = () => {
  const genres = useSelector((state) => state.movies.moviesData.genres.items);

  const dispatch = useDispatch();
  const moviesStatus = useSelector(getMoviesStatus);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className="genres-page page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Genres</h2>
      </div>
      {moviesStatus === STATUS.SUCCEEDED ? (
        <ul className="genres-ctn card-ctn">
          {genres?.map((genre, index) => (
            <Card key={index} genre={genre} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GenresPage;
