import { useEffect } from "react";
import TopsMusicsComponents from "../../components/TopsMusics/TopsMusicsComponents";
import AlbumsCompoment from "../../components/albums/AlbumsCompoment";
import ArtistsComponent from "../../components/artists/ArtistsComponent";
import EpisodesComponent from "../../components/episodes/EpisodesComponent";
import FavoritesComponent from "../../components/favorites/FavoritesComponent";
import GenresComponent from "../../components/genres/GenresComponent";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PodcastsComponent from "../../components/podcasts/PodcastsComponent";
import TracksComponent from "../../components/tracks/TracksComponent";
import "./homePage.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, getMoviesStatus } from "../../redux/movies.slice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/loader/Loader";

const HomePage = () => {
  const favorites = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  const moviesStatus = useSelector(getMoviesStatus);

  return (
    <div className="home-page">
      <Header />
      <Navbar />
      {favorites.length > 0 && <FavoritesComponent />}
      {moviesStatus === STATUS.SUCCEEDED ? (
        <>
          <AlbumsCompoment /> <ArtistsComponent /> <EpisodesComponent />{" "}
          <GenresComponent /> <PodcastsComponent /> <TopsMusicsComponents />{" "}
          <TracksComponent />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default HomePage;
