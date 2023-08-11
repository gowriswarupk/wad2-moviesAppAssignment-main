import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getActors = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getActorsDetails = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
  
      })
      .catch((error) => {
        throw error
     });
    };