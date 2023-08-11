import React, { useState, useEffect } from "react";
import PageTemplate from "../components/popularActorsTemplateListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularActors } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


import { getActors } from "../api/tmdb-api";

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