import { useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./episodesComponent.scss";

const EpisodesComponent = () => {
  const episodes = useSelector(
    (state) => state.movies.moviesData.episodes.items
  );
  return (
    <div className="c-episodes h-component">
      <div className="top">
        <h3 className="c-title">Episodes</h3>
        <SeeAll pageLink={"/episodes"} />
      </div>
      <ul className="episode-ctn card-ctn">
        {episodes?.slice(0, 7)?.map((episode, index) => (
          <Card key={index} episode={episode} />
        ))}
      </ul>
    </div>
  );
};

export default EpisodesComponent;
