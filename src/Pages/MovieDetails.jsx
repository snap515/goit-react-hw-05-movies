import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "services/movieService";
import { STATUSES } from "utils/Constans";
import css from '../components/App.module.css'

const Cast = lazy(() => import('Pages/Cast'))
const Reviews = lazy(()=> import('Pages/Reviews'))

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [statuses, setStatuses] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log('details location',location)
  const backLinkRef = useRef(location.state?.from ?? "/")


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
        <Link to={backLinkRef.current}>Go back</Link>
        <img src="" alt="" />
        <div>
          <h2>{movieDetails.title}</h2>
          <p></p>
          <h3>movie</h3>
          <p></p>
          <h3>movie</h3>
          <p></p>
        </div>
          <NavLink to='cast' className={({isActive}) => `${css.navLink} ${isActive? css.active : ''}`}>Cast</NavLink>
          <NavLink to='reviews' className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`}>Reviews</NavLink>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes >
              <Route path="/cast" element={<Cast movieId={movieId}></Cast>}></Route>
              <Route path="/reviews" element={<Reviews movieId={movieId}></Reviews>}></Route>
            </Routes>
          </Suspense>
    </div>}
    </>
    )
}

export default MovieDetails;