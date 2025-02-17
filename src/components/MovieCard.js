import React from "react";
import { TMDB_IMG_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return <img className="w-40 mr-4 rounded-sm" src={TMDB_IMG_URL + movie.poster_path}></img>;
};

export default MovieCard;
