import Navigation from "../../components/navigation/Navigation";
import "./artistsPage.scss";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncMovies, getMoviesStatus } from "../../redux/movies.slice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/loader/Loader";

const ArtistsPage = () => {
  const artists = useSelector(
    (state) => state.movies.moviesData.artists?.items
  );
  const dispatch = useDispatch();

  const moviesStatus = useSelector(getMoviesStatus);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className="artists-page page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Artistes</h2>
      </div>
      {moviesStatus === STATUS.SUCCEEDED ? (
        <ul className="artists-ctn card-ctn">
          {artists?.map((artist, index) => (
            <Card key={index} artist={artist} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ArtistsPage;
