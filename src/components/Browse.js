import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondayContainer";

const Browse = () => {
  const dispatch = useDispatch()

  const getNowPlayingMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const data = await fetch(url, API_OPTIONS)
    const jsonData = await data.json()
    dispatch(addnowPlayingMovies(jsonData.results))
  }

  useEffect(()=> {
    getNowPlayingMovies();
  }, [])

  return (
    <>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
    </>
  );
};

export default Browse;
