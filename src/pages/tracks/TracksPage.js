import Navigation from "../../components/navigation/Navigation";
import "./tracksPage.scss";

const TracksPage = () => {
  return (
    <div className="tracks-page h-component">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Titres</h2>
      </div>
    </div>
  );
};

export default TracksPage;
