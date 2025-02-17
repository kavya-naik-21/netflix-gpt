import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailer);
  const fetchMovieTrailer = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();

    const trailers = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailers[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen h-fit aspect-video pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
