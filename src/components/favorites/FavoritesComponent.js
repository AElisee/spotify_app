import SeeAll from "../seeAll/SeeAll";
import "./favoritesComponent.scss";

const FavoritesComponent = () => {
  return (
    <div className="favorite-component h-component">
      <div className="top">
        <h3 className="c-title">Ce que vous avez liké</h3>
        <SeeAll pageLink={"/favoris"} />
      </div>
    </div>
  );
};

export default FavoritesComponent;
