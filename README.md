# Assignment 2 - Updated Web API

Name: Gowriswarup Kailas Perumal

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,

--Update---

Working Auth0 Functionality with private favourites (protected) link. Fully functional.

---

- Feature 1 - .... Database Integration with MongoDB .....
- Feature 2 - .... API routes with connection to auth ...
- Feature 3 = ... Authentication ...

## Installation Requirements

After cloning the repo, :-

run 'npm install'

Collect your API key from TMDB, and change the API key in '.env' file of the code. You should change you API key at this line of code -> 'REACT_APP_TMDB_KEY'. at React App and over in Movie_Api -> 'TMDB_KEY'.

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=-DatabaseURL-
SEED_DB=True
SECRET= -JWTSecret-
TMDB_KEY= -TMDBKEY-

## API Design

Give an overview of your web API design, perhaps similar to the following:

|                               | GET                       | POST                          | PUT | DELETE |
| ----------------------------- | ------------------------- | ----------------------------- | --- | ------ |
| /api/movies                   | Gets a list of movies     | N/A                           | N/A |
| /api/movies/{movieid}         | Get a Movie               | N/A                           | N/A | N/A    |
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A    |
| ...                           | ...                       | ...                           | ... | ...    |

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example:

```Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

```
