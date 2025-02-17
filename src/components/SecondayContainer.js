import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="absolute bg-black">
      <div className="z-20 ml-20 -mt-40 ">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies.nowPlayingMovies} />
        <MovieList title="Up Coming" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
