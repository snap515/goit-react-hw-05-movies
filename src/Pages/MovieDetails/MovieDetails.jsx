import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "services/movieService";
import { STATUSES } from "utils/Constans";
import cssApp from '../../components/App.module.css'
import css from './MovieDetails.module.css'
import { Loader } from "components/Loader/Loader";

const Cast = lazy(() => import('Pages/Cast/Cast'))
const Reviews = lazy(() => import('Pages/Reviews/Reviews'))

export const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [statuses, setStatuses] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const location = useLocation();
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
      {/* {statuses === STATUSES.pending && <Loader/>} */}
      {statuses === STATUSES.error && error && <div>{error.message}</div>}
      
      {movieDetails && 
        <div>
        <Link className={css.goBackBtn} to={backLinkRef.current}>Go back</Link>
          <div className={css.movieDetailsWrapper}>
            <img className={css.moviePoster} src={movieDetails.poster_path? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : defaultImg } alt="poster" width={250}/>
            <div className={css.MovieInfo}>
              <h2 className={css.movieTitle}>{movieDetails.title}</h2>
              <p className={css.movieText}>User score: {(movieDetails.vote_average*10).toFixed(0)}%</p>
              <h3 className={css.movieStatTitle}>Overview</h3>
              <p className={css.movieText}>{movieDetails.overview}</p>
              <h3 className={css.movieStatTitle}>Genres</h3>
              <p className={css.movieText}>{movieDetails.genres.map(genre => <span key={genre.id}>{genre.name} </span>)}</p>
            </div>
          </div>
          <h3 className={css.movieStatTitle}>Additional information</h3>
          <div className={css.additionalInfoWrapper}>
            <NavLink to='cast' className={({isActive}) => `${cssApp.navLink} ${isActive? cssApp.active : ''}`}>Cast</NavLink>
            <NavLink to='reviews' className={({ isActive }) => `${cssApp.navLink} ${isActive ? cssApp.active : ''}`}>Reviews</NavLink>
          </div>
            
          
          <Suspense fallback={<div><Loader/></div>}>
            <Routes >
              <Route path="/cast" element={<Cast movieId={movieId}></Cast>}></Route>
              <Route path="/reviews" element={<Reviews movieId={movieId}></Reviews>}></Route>
            </Routes>
          </Suspense>

        </div>
      }
    </>
    )
}

export default MovieDetails;