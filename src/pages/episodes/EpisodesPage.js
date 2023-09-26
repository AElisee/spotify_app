import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import Navigation from "../../components/navigation/Navigation";
import "./episodesPage.scss";
import { fetchAsyncMovies, getMoviesStatus } from "../../redux/movies.slice";
import { useEffect } from "react";
import { STATUS } from "../../utils/status";
import Loader from "../../components/loader/Loader";

const Episodes = () => {
  const episodes = useSelector(
    (state) => state.movies.moviesData.episodes.items
  );
  const dispatch = useDispatch();
  const moviesStatus = useSelector(getMoviesStatus);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className="episodes-page page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Episodes</h2>
      </div>
      {moviesStatus === STATUS.SUCCEEDED ? (
        <ul className="episodes-ctn card-ctn">
          {episodes?.map((episode, index) => (
            <Card key={index} episode={episode} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Episodes;
