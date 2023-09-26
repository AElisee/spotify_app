import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import Navigation from "../../components/navigation/Navigation";
import React from "./podcastsPage.scss";

const PodcastsPage = () => {
  const podcasts = useSelector(
    (state) => state.movies.moviesData.podcasts.items
  );
  return (
    <div className="podcasts-page page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Podcasts</h2>
      </div>
      <ul className="podcasts-ctn card-ctn">
        {podcasts?.map((podcast, index) => (
          <Card key={index} podcast={podcast} />
        ))}
      </ul>
    </div>
  );
};

export default PodcastsPage;
