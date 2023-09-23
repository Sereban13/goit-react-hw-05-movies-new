import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
//
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MovieSearch = lazy(() => import('pages/MovieSearch'));
const Header = lazy(() => import('./Header'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />

          <Route path={routes.MOVIE_ID} element={<MovieDetails />} />

          <Route path={routes.MOVIES} element={<MovieSearch />} />
        </Route>
      </Routes>
    </div>
  );
};
