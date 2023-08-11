import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import {useState} from "react"
import { Pagination, PaginationItem } from "@mui/material";
import Typography from "@mui/material/Typography";


const HomePage = (props) => {
    const [page, setPage] = useState(1);
    const {data, error, isLoading, isError }  = useQuery(['discover',page], getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <><PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      } } /><Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} /></>
);
};

export default HomePage;