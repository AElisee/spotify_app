import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./topsMusicsComponent.scss";
import { useEffect } from "react";
import { fetchAsyncMovies, getMoviesStatus } from "../../redux/movies.slice";
import { STATUS } from "../../utils/status";
import Loader from "../loader/Loader";

const TopsMusicsComponents = () => {
  const topResults = useSelector(
    (state) => state.movies.moviesData.topResults?.items
  );

  const dispatch = useDispatch();
  const moviesStatus = useSelector(getMoviesStatus);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className="c-topsMusics h-component">
      <div className="top">
        <h3 className="c-title">Tops musiques</h3>
        <SeeAll pageLink={"tops-musiques"} />
      </div>
      {moviesStatus === STATUS.SUCCEEDED ? (
        <ul className="topMusics-ctn card-ctn">
          {topResults?.slice(0, 7)?.map((topMusic, index) => (
            <Card key={index} topMusic={topMusic} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TopsMusicsComponents;
