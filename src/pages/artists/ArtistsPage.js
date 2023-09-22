import Navigation from "../../components/navigation/Navigation";
import "./artistsPage.scss";

const ArtistsPage = () => {
  return (
    <div className="artists-page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">artistes</h2>
      </div>
    </div>
  );
};

export default ArtistsPage;
