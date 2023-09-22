import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./albumsPage.scss";
import Card from "../../components/card/Card";
import { useSelector } from "react-redux";

const AlbumsPage = () => {
  const albums = useSelector((state) => state.movies.moviesData.albums.items);
  return (
    <div className="albums-page page">
      <div className="p-header">
        <Navigation left={"/"} right={""} />
        <h2 className="p-title">Albums</h2>
      </div>
      <ul className="albums-ctn card-ctn">
        {albums?.map((album, index) => (
          <Card key={index} album={album} />
        ))}
      </ul>
    </div>
  );
};

export default AlbumsPage;
