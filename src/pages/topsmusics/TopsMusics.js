import Navigation from "../../components/navigation/Navigation";
import "./topsMusics.scss";

const TopsMusics = () => {
  return (
    <div className="tops-musics h-component">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">tops musiques</h2>
      </div>
    </div>
  );
};

export default TopsMusics;
