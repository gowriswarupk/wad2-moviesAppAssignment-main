import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../actorList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function PopularActorsListPageTemplate({ actors, title, selectFavorite }) {
  const classes = useStyles(); // useStyles() returns a class object with a class property
  const [nameFilter, setNameFilter] = useState(""); // useState() for name
  const [genreFilter, setGenreFilter] = useState("0");//usestate for genre


  let displayedActors = actors
    .filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
  console.log(displayedActors)

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <ActorList selectFavorite={selectFavorite} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default PopularActorsListPageTemplate;