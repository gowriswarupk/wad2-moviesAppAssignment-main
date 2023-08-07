import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie.id]);
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const addToWatchList = (movie) => {
    setMustWatch([...mustWatch, movie.id]);
  };

  const removeFromWatchList = (movie) => {
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  return (
    <ActorsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        mustWatch,
        addToWatchList,
        removeFromWatchList,
        addReview
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
