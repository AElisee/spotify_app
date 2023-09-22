import "./card.scss";

const Card = ({ album, artist, episode, genre, podcast, topMusic, track }) => {
  // les donnes de la sections albums
  const albumName = album?.data?.name;
  const album_artistName = album?.data?.artists?.items[0]?.profile?.name;
  const albumYear = album?.data?.date?.year;
  const albumPic = album?.data?.coverArt?.sources[0]?.url;

  // les donnes de la sections artists
  const artists_artistName = artist?.data?.profile?.name;
  const artistPic = artist?.data?.visuals?.avatarImage?.sources[0].url;

  // les donnes de la section episodes
  const episodePic = episode?.data?.coverArt?.sources[0].url;
  const episodeName = episode?.data?.name;

  // les donnees de la section genres
  const genrePic = genre?.data?.image?.sources[0].url;
  const genreName = genre?.data?.name;

  // les donnes de la section de podcasts
  const podcastPic = podcast?.data?.coverArt?.sources[0].url;
  const podcastName = podcast?.data?.name;
  const podcastPublisher = podcast?.data?.publisher.name;

  //  les donnees de la section tops musiques
  const topMusicName = topMusic?.data?.name;
  const topMusicName_1 = topMusic?.data?.profile?.name;
  const topMusicPic = topMusic?.data?.visuals?.avatarImage?.sources[0].url;
  const topMusicPic_1 = topMusic?.data?.albumOfTrack?.coverArt?.sources[0].url;
  const topMusicPic_2 = topMusic?.data?.images?.items[0].sources[0].url;
  const topMusicPic_3 = topMusic?.data?.coverArt?.sources[0].url;

  // les donnees de la section titres
  const trackName = track?.data?.name;
  const track_artistName = track?.data?.artists?.items[0]?.profile.name;
  const trackPic = track?.data?.albumOfTrack?.coverArt?.sources[0].url;

  return (
    <div className="card">
      <div className="img-ctn">
        <img
          src={
            albumPic ||
            artistPic ||
            episodePic ||
            genrePic ||
            podcastPic ||
            topMusicPic ||
            trackPic ||
            topMusicPic_1 ||
            topMusicPic_2 ||
            topMusicPic_3
          }
          alt={album_artistName || artists_artistName}
        />
      </div>
      <div className="txt-ctn">
        <h5 className="title">
          {albumName ||
            artists_artistName ||
            episodeName ||
            genreName ||
            podcastName ||
            topMusicName ||
            topMusicName_1 ||
            track_artistName}
        </h5>
        <p className="name">
          {album_artistName || podcastPublisher || trackName}
        </p>
        <p className="year">{albumYear}</p>
      </div>
    </div>
  );
};

export default Card;
