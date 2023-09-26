import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import Navigation from "../../components/navigation/Navigation";
import "./topsMusics.scss";

const TopsMusics = () => {
  const topResults = useSelector(
    (state) => state.movies.moviesData.topResults.items
  );
  return (
    <div className="topResults-page page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Musiques Populaires</h2>
      </div>
      <ul className="topResults-ctn card-ctn">
        {topResults?.map((topMusic, index) => (
          <Card key={index} topMusic={topMusic} />
        ))}
      </ul>
    </div>
  );
};

export default TopsMusics;
