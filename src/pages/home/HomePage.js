import { useEffect, useState } from "react";
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
import axios from "axios";
import { useDispatch } from "react-redux";
import { getMoviesSucces } from "../../redux/movies.slice";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const favorites = [];
  const dispatch = useDispatch();
  // const moviesData = useSelector((state) => state.movies.moviesData);
  // // console.log(moviesData.albums);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/search/",
        params: {
          q: "q",
          type: "multi",
          offset: "0",
          limit: "0",
          numberOfTopResults: "5",
        },
        headers: {
          "X-RapidAPI-Key":
            "5ae4e8bff9msh9f77a7d5c857a47p15b97djsn36981d386453",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data);
        dispatch(getMoviesSucces(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <Navbar />
      {favorites.length > 0 && <FavoritesComponent />}
      <AlbumsCompoment />
      <ArtistsComponent />
      <EpisodesComponent />
      <GenresComponent />
      <PodcastsComponent />
      <TopsMusicsComponents />
      <TracksComponent />
    </div>
  );
};

export default HomePage;
