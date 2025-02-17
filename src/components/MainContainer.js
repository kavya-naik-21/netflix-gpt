import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  if (!nowPlayingMovies) return;

  const topMovie = nowPlayingMovies[0];

  const { id, title, overview } = topMovie;

  return (
    <div className="">
      <VideoBackground movieId={id} />
      <VideoTitle movieTitle={title} movieOverview={overview} />
    </div>
  );
};

export default MainContainer;
