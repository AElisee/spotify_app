import { useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./tracksComponent.scss";

const TracksComponent = () => {
  const tracks = useSelector((state) => state.movies.moviesData.tracks.items);
  return (
    <div className="c-track h-component">
      <div className="top">
        <h3 className="c-title">Titres</h3>
        <SeeAll pageLink={"/titres"} />
      </div>
      <ul className="tracks-ctn card-ctn">
        {tracks?.slice(0, 7)?.map((track, index) => (
          <Card key={index} track={track} />
        ))}
      </ul>
    </div>
  );
};

export default TracksComponent;
