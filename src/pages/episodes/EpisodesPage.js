import Navigation from "../../components/navigation/Navigation";
import "./episodesPage.scss";

const EpisodesPage = () => {
  return (
    <div className="episodes-page h-component">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">épisodes</h2>
      </div>
    </div>
  );
};

export default EpisodesPage;
