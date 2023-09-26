import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./albumsPage.scss";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, getMoviesStatus } from "../../redux/movies.slice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/loader/Loader";
import { useEffect } from "react";

const AlbumsPage = () => {
  const albums = useSelector((state) => state.movies.moviesData.albums?.items);

  const moviesStatus = useSelector(getMoviesStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className="albums-page page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Albums</h2>
      </div>
      {moviesStatus === STATUS.SUCCEEDED ? (
        <ul className="albums-ctn card-ctn">
          {albums?.map((album, index) => (
            <Card key={index} album={album} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AlbumsPage;
