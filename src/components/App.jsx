import { Suspense, lazy, useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import { getTrendingMovies } from "services/movieService";
import { STATUSES } from "utils/Constans";

import css from './App.module.css'

const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));

export const App = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [statuses, setStatuses] = useState(STATUSES.idle);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setStatuses(STATUSES.pending)

        const data = await getTrendingMovies();
        setTrendMovies(data);
        setStatuses(STATUSES.success)

      } catch (error) {
        setStatuses(STATUSES.error);
        setError(error);
      }
    }
    if (trendMovies === null) {
      getTrendMovies();
    }
  }, [trendMovies])



  return (
    <div className='content-wrapper'>
      <header>
        <div className={css.navList}>
          <NavLink className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`} to="/movies">Movies</NavLink>
        </div>
        
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home trendMovies={trendMovies}></Home>}></Route>
            <Route path="/movies" element={<Movies></Movies>}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetails></MovieDetails>}></Route>
          </Routes>
        </Suspense>
        
      </main>
    </div>
  );
};