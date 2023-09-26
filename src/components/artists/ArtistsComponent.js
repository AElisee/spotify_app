import { useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./artistsComponent.scss";
import { getAllMovies } from "../../redux/movies.slice";

const ArtistsComponent = () => {
  const MoviesData = useSelector(getAllMovies);
  const artists = MoviesData.artists.items;

  return (
    <div className="c-artist h-component">
      <div className="top">
        <h3 className="c-title">Artistes</h3>
        <SeeAll pageLink={"/artistes"} />
      </div>
      <ul className="artist-ctn card-ctn">
        {artists?.slice(0, 7)?.map((artist, index) => (
          <Card key={index} artist={artist} />
        ))}
      </ul>
    </div>
  );
};

export default ArtistsComponent;
