# Assignment 2 - Updated Web API

Name: Gowriswarup Kailas Perumal

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,


Working Auth0 Functionality with private favourites (protected) link. Fully functional.

---

- Feature 1 - .... Database Integration with MongoDB .....
- Feature 2 - .... API routes with connection to auth ...
- Feature 3 = ... Authentication with Auth0...
- Feature 4 = ... Protected routes ...
- Feature 5 = ... Pagination ...
- Feature 6 = ... Dark Mode implementation ...
## Installation Requirements

After cloning the repo, :-

run 'npm install'

Collect your API key from TMDB, and change the API key in '.env' file of the code. You should change you API key at this line of code -> 'REACT_APP_TMDB_KEY'. at React App and over in Movie_Api -> 'TMDB_KEY'.

##TROUBLESHOOTING:

in a couple of fresh runs, it was noted that the npm install command does not fully carry out the required installs, therefore, it is best. to check the output in case of errors and complete the installs manually. Common commands required are listed below:

```
npm install @mui/icons-material --force       
npm install @mui/material @emotion/react @emotion/styled --force
```
MongoDB integration: If using MongoDB Atlas, requires link to db, with username and password info updated as shown below. 

Auth0 integration: With a free account, from the settings page, within Application info for this session, the following info is also required for the .env file:  AUTH_DOMAIN, AUTH_CLIENT_ID and REACT_APP_AUTH_CLIENT_SECRET

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb+srv://<username>:<password>@url
SEED_DB=True
SECRET= -JWTSecret-
TMDB_KEY= -TMDBKEY-
REACT_APP_TMDB_KEY= -REACTAPPTMDBKEY-
REACT_APP_AUTH_DOMAIN= -REACTAPPAUTHDOMAIN-
REACT_APP_AUTH_CLIENT_ID= -REACTAPPAUTHCLIENTID-
REACT_APP_AUTH_AUDIENCE=
REACT_APP_AUTH_CLIENT_SECRET= -REACTAPPAUTHCLIENTSECRET-


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


## Screenshots
<img width="1213" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/0c9d10eb-7bdd-448f-a769-1b76b8e1d0d3">
Upload db successful

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/8d638eb6-6ee0-483f-9e60-c2a3f0392e0c">
Movie App running on port 3000 simultaneously

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/22ecf5c2-3818-4ea0-bf79-637565b6fe6e">
Movie App homepage

<img width="606" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/703dc5ea-2133-49e8-952b-27c4ce8168bb">
Pagination in focus

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/2c90e8ee-3787-419e-8ec9-6d2a677264d7">
Dark theme in focus

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/642d2cf6-aaec-4583-bf98-408a51424950">
Protected route redirect when not logged in

<img width="432" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/6799559b-7e55-4ab5-a616-e01c127d0013">
Login Popup - Auth0

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/90d9dd59-d308-405b-97d8-92ba227a6b84">
Favorites Page (with couple of movies selected)

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/b7e80b1e-19ee-4400-9c96-924f503f588d">
Add a review page in focus

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-moviesAppAssignment-main/assets/58232821/bc09491e-3930-49bb-869f-bf9babedcfef">
Movies info in focus


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

