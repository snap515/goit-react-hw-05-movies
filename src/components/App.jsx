import { useEffect, useState } from "react";
import Home from "Pages/Home";
import Movies from "Pages/Movies"
import { getMovies } from "services/movieService";
import { STATUSES } from "utils/Constans";
import { NavLink,Routes, Route } from "react-router-dom";

import css from './App.module.css'
import MovieDetails from "Pages/MovieDetails";

export const App = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [statuses, setStatuses] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setStatuses(STATUSES.pending)

        const data = await getMovies();
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
    <div>
      <header>
        <NavLink className={({isActive}) => `${css.navLink} ${isActive? css.active : ''}`} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`} to="/movies">Movies</NavLink>
      </header>
      <main>

        <Routes>
          <Route path="/" element={<Home trendMovies={trendMovies}></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/movies/:movieId/*" element={<MovieDetails></MovieDetails>}></Route>
        </Routes>
      </main>
    </div>
  );
};