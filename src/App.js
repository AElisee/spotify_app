import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FavoritePage from "./pages/favorites/FavoritePage";
import ArtistsPage from "./pages/artists/ArtistsPage";
import PodcastsPage from "./pages/podcastsPage/PodcastsPage";
import GenresPage from "./pages/genres/GenresPage";
import EpisodesPage from "./pages/episodes/EpisodesPage";
import PlaylistsPage from "./pages/playlists/PlaylistsPage";
import TracksPage from "./pages/tracks/TracksPage";
import TopsMusics from "./pages/topsmusics/TopsMusics";
import AlbumsPage from "./pages/albums/AlbumsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/favoris" element={<FavoritePage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/artistes" element={<ArtistsPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
        <Route path="/tops-musiques" element={<TopsMusics />} />
        <Route path="/titres" element={<TracksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
