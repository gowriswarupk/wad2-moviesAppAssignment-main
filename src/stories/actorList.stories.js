import React from "react";
import ActorList from "../components/actorList";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import ActorsContextProvider from "../contexts/actorsContext";

export default {
  title: "Home Page/ActorList",
  component: ActorList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorsContextProvider>{Story()}</ActorsContextProvider>
  ]
};

export const Basic = () => {
  const actors = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
    { ...SampleMovie, id: 5 }
  ];
  return (
    <Grid container spacing={5}>
      <ActorList
        actors={actors}
        action={(actor) => <AddToFavoritesIcon actor={actor} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
