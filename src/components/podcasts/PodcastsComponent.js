import { useSelector } from "react-redux";
import Card from "../card/Card";
import SeeAll from "../seeAll/SeeAll";
import "./podcastsComponent.scss";

const PodcastsComponent = () => {
  const podcasts = useSelector(
    (state) => state?.movies?.moviesData?.podcasts?.items
  );
  return (
    <div className="c-podcasts  h-component">
      <div className="top">
        <h3 className="c-title">Podcasts</h3>
        <SeeAll pageLink={"/podcasts"} />
      </div>
      <ul className="podcasts-ctn card-ctn">
        {podcasts?.slice(0, 7)?.map((podcast, index) => (
          <Card key={index} podcast={podcast} />
        ))}
      </ul>
    </div>
  );
};

export default PodcastsComponent;
