import { useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./topsMusicsComponent.scss";

const TopsMusicsComponents = () => {
  const topResults = useSelector(
    (state) => state.movies.moviesData.topResults.items
  );
  return (
    <div className="c-topsMusics  h-component">
      <div className="top">
        <h3 className="c-title">Tops musiques</h3>
        <SeeAll pageLink={"tops-musiques"} />
      </div>
      <ul className="topMusics-ctn card-ctn">
        {topResults?.slice(0, 7)?.map((topMusic, index) => (
          <Card key={index} topMusic={topMusic} />
        ))}
      </ul>
    </div>
  );
};

export default TopsMusicsComponents;
