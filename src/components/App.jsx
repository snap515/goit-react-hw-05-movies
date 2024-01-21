import { Suspense, lazy } from "react";
import { NavLink, Routes, Route} from "react-router-dom";

import css from './App.module.css'
import { Loader } from "./Loader/Loader";
import NotFoundPage from "Pages/NotFoundPage/NotFoundPage";

const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));

export const App = () => {
  return (
    <div className='content-wrapper'>
      <header>
        <div className={css.navList}>
          <NavLink className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`} to="/movies">Movies</NavLink>
        </div>
        
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home ></Home>}></Route>
            <Route path="/movies" element={<Movies></Movies>}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetails></MovieDetails>}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};