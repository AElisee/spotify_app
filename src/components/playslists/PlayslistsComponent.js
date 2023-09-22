import "./playslistsComponent.scss";

const PlayslistsComponent = () => {
  return (
    <div className="c-palylists  h-component">
      <div className="top">
        <h3 className="c-title">Playlists</h3>
        <SeeAll pageLink={"/playlists"} />
      </div>
    </div>
  );
};

export default PlayslistsComponent;
