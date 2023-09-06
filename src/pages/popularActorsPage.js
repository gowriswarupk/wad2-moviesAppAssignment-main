import React, { useState, useEffect } from "react";
import PageTemplate from "../components/popularActorsTemplateListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularActors } from "../api/movie-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


import { getActors } from "../api/movie-api";

const HomePage = (props) => {
  const [actors, setActors] = useState([]);


  useEffect(() => {
    getActors().then(a => {
        console.log(a)
      setActors(a);
    });
  }, []);

  return (
    <PageTemplate
      title="POPULAR ACTORS"
      actors={actors}
    />
  );
};
export default HomePage;