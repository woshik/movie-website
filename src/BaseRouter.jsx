// Application base routing file

import { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// view component lazy loading
const home = lazy(() => import('./pages/Home'));
const movieDetail = lazy(() => import('./pages/MovieDetail'));
const genre = lazy(() => import('./pages/Genre'));
const watchList = lazy(() => import('./pages/WatchList'));
const viewed = lazy(() => import('./pages/Viewed'));

const BaseRouter = () => (
  <Switch>
    <Route path="/movie/:id" component={movieDetail} />
    <Route path="/genre/:id" component={genre} />
    <Route path="/movies" component={home} />
    <Route path="/watchlist" component={watchList} />
    <Route path="/viewed" component={viewed} />
    <Redirect to="/movies" />
  </Switch>
);

export default BaseRouter;
