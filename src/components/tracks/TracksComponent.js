import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./tracksComponent.scss";
import { fetchAsyncMovies, getMoviesStatus } from "../../redux/movies.slice";
import { useEffect } from "react";
import { STATUS } from "../../utils/status";
import Loader from "../loader/Loader";

const TracksComponent = () => {
  const tracks = useSelector((state) => state.movies.moviesData.tracks.items);

  const dispatch = useDispatch();
  const moviesStatus = useSelector(getMoviesStatus);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className="c-track h-component">
      <div className="top">
        <h3 className="c-title">Titres</h3>
        <SeeAll pageLink={"/titres"} />
      </div>
      {moviesStatus === STATUS.SUCCEEDED ? (
        <ul className="tracks-ctn card-ctn">
          {tracks?.slice(0, 7)?.map((track, index) => (
            <Card key={index} track={track} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TracksComponent;
