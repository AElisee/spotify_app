import Navigation from "../../components/navigation/Navigation";
import "./playlistsPage.scss";

const PlaylistsPage = () => {
  return (
    <div className="playlists-page h-component">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">playlists</h2>
      </div>
    </div>
  );
};

export default PlaylistsPage;
