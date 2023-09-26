import { useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./genresComponent.scss";

const GenresComponent = () => {
  const genres = useSelector((state) => state.movies.moviesData.genres.items);

  return (
    <div className="c-genres  h-component">
      <div className="top">
        <h3 className="c-title">Genres</h3>
        <SeeAll pageLink={"/genres"} />
      </div>
      <ul className="genres-ctn card-ctn">
        {genres?.slice(0, 7)?.map((genre, index) => (
          <Card key={index} genre={genre} />
        ))}
      </ul>
    </div>
  );
};

export default GenresComponent;
