import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import Navigation from "../../components/navigation/Navigation";
import "./tracksPage.scss";

const TracksPage = () => {
  const tracks = useSelector((state) => state.movies.moviesData.tracks.items);
  return (
    <div className="tracks-page page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Titres</h2>
      </div>
      <ul className="tracks-ctn card-ctn">
        {tracks?.map((track, index) => (
          <Card key={index} track={track} />
        ))}
      </ul>
    </div>
  );
};

export default TracksPage;
