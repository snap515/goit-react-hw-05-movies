import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { getMovieById } from "services/movieService";
import { STATUSES } from "utils/Constans";
import css from '../components/App.module.css'
import Cast from "./Cast";
import Reviews from "./Reviews";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [statuses, setStatuses] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  const {movieId} = useParams();

  useEffect(() => {
    
    const getDetails = async () => {
      try {
        setStatuses(STATUSES.pending)

        const data = await getMovieById(movieId)
        setMovieDetails(data);
        setStatuses(STATUSES.success)
      }
      catch (error) {
        setStatuses(STATUSES.error);
        setError(error);
      }
    }
    if (movieDetails === null) {
      getDetails()
    }
    
  }, [movieId, movieDetails ])
  
  
  return (
    <>
      {statuses === STATUSES.pending && <div>Loading...</div>}
      {statuses === STATUSES.error && error && <div>{error.message}</div>}
      {movieDetails && 
      <div>
        <img src="" alt="" />
        <div>
          <h2>{movieDetails.title}</h2>
          <p></p>
          <h3></h3>
          <p></p>
          <h3></h3>
          <p></p>
        </div>
      <NavLink to='cast' className={({isActive}) => `${css.navLink} ${isActive? css.active : ''}`}>Cast</NavLink>
      <NavLink to='reviews' className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`}>Reviews</NavLink>
      <Routes>
        <Route path="/cast" element={<Cast movieId={movieId}></Cast>}></Route>
        <Route path="/reviews" element={<Reviews movieId={movieId}></Reviews>}></Route>
      </Routes>
    </div>}
    </>
    )
}

export default MovieDetails;