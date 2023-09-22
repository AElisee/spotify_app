import Navigation from "../../components/navigation/Navigation";

const FavoritePage = () => {
  return (
    <div className="favorite-page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">favoris</h2>
      </div>
    </div>
  );
};

export default FavoritePage;
