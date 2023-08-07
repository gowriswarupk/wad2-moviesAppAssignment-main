import React from "react";
import PageTemplate from "../components/templateActorsPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularActors } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const PopularActorsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "popularActors",
    getPopularActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const AddToFavoritesIcon = (movieId) => true;
  return (
    <PageTemplate
      title="POPULAR ACTORS"
      popularActors={getPopularActors}
      action={(popularActors) => {
        return <AddToFavoritesIcon popularActors={popularActors} />;
      }}
    />
  );
};

export default PopularActorsPage;
