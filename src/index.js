import AddMovieReviewPage from "./pages/addMovieReviewPage";
import SiteHeader from "./components/siteHeader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import PopularActorsPage from "./pages/popularActorsPage";

import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";

import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";

import LoginPage from "./pages/loginPage"; //NEW
import SignUpPage from "./pages/signUpPage"; //NEW

import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    }
  }
});

const onRedirectCallback = (appState) => {
  createBrowserHistory().push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const authProviderConfig = {
  domain: process.env.REACT_APP_AUTH_DOMAIN,
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
  ...(process.env.REACT_APP_AUTH_AUDIENCE
    ? { audience: process.env.REACT_APP_AUTH_AUDIENCE }
    : null),
  redirectUri: window.location.origin,
  onRedirectCallback
};

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const onRedirectCallback = (appState) => {
    history.replace(
      appState && appState?.returnTo
        ? appState?.returnTo
        : window.location.pathname
    );
    history.go(0);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

const App = () => {
  return (
    <Auth0ProviderWithRedirectCallback {...authProviderConfig}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            {" "}
            <Switch>
              <Route
                exact
                path="/reviews/form"
                component={AddMovieReviewPage}
              />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              {/* <Route
                exact
                path="/movies/favorites"
                component={FavoriteMoviesPage}
              /> */}
              <ProtectedRoute
                path="/movies/favorites"
                component={FavoriteMoviesPage}
              />
              <Route
                exact
                path="/movies/toprated"
                component={TopRatedMoviesPage}
              />
              <Route
                exact
                path="/movies/nowplaying"
                component={NowPlayingMoviesPage}
              />
              <Route
                exact
                path="/movies/trending"
                component={TrendingMoviesPage}
              />
              <Route
                exact
                path="/movies/upcoming"
                component={UpcomingMoviesPage}
              />
              <Route
                exact
                path="/person/popular"
                component={PopularActorsPage}
              />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signuUp" component={SignUpPage} />
              <Route exact path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Auth0ProviderWithRedirectCallback>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
