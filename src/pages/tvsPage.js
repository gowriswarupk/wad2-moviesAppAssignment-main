import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvs} from '../api/movie-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import {useState} from "react"
import { Pagination, PaginationItem } from "@mui/material";
import Typography from "@mui/material/Typography";


const TvsPage = (props) => {
    const [page, setPage] = useState(1);
    const {data, error, isLoading, isError }  = useQuery('discover', getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const tvs = data;

  // Redundant, but necessary to avoid app crashing.
  const favorites = tvs.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (tvId) => true

  return (
    <><PageTemplate
      title="Discover TVs"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavoritesIcon tv={tv} />;
      } } /><Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} /></>
);
};

export default TvsPage;
