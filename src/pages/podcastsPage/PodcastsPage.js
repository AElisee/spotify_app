import Navigation from "../../components/navigation/Navigation";
import React from "./podcastsPage.scss";

const PodcastsPage = () => {
  return (
    <div className="podcasts-page h-component">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">podcasts</h2>
      </div>
    </div>
  );
};

export default PodcastsPage;
