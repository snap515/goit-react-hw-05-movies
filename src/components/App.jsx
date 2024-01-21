import { Suspense, lazy } from "react";
import { Routes, Route} from "react-router-dom";

import { Loader } from "./Loader/Loader";
import NotFoundPage from "Pages/NotFoundPage/NotFoundPage";
import { Layout } from "./Layout/Layout";

const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('Pages/Home/Home'));
const Movies = lazy(() => import('Pages/Movies/Movies'));
const Cast = lazy(() => import('Pages/Cast/Cast'));
const Reviews = lazy(() => import('Pages/Reviews/Reviews'));

export const App = () => {
  return (
    
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home ></Home>}></Route>
          <Route path="movies" element={<Movies></Movies>}></Route>
          <Route path="movies/:movieId/*" element={<MovieDetails></MovieDetails>}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>

  );
};