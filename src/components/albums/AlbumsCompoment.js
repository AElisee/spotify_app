import { useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./albumsComponents.scss";
import { getAllMovies } from "../../redux/movies.slice";

const AlbumsCompoment = () => {
  const MoviesData = useSelector(getAllMovies);
  const albums = MoviesData.albums.items;

  return (
    <div className="c-albums h-component">
      <div className="top">
        <h3 className="c-title">Albums</h3>
        <SeeAll pageLink={"/albums"} />
      </div>
      <ul className="albums-ctn card-ctn">
        {albums &&
          albums
            .slice(0, 7)
            .map((album, index) => <Card key={index} album={album} />)}
      </ul>
    </div>
  );
};

export default AlbumsCompoment;
