import Navigation from "../../components/navigation/Navigation";
import "./genresPage.scss";

const GenresPage = () => {
  return (
    <div className="genre-page h-component">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Genres</h2>
      </div>
    </div>
  );
};

export default GenresPage;
