import { Link, useLocation } from "react-router-dom"
import { defaultImg } from "Pages/MovieDetails/MovieDetails";
import css from './MovieList.module.css'

export const MoviesList = ({ movies }) => {
  console.log(movies)
  const location = useLocation();
  console.log('moviesList location', location)
  return (
    <div className={css.movieListWrapper}>
      <ul className={css.movieList}>
        {movies.results.map(movieElem =>
          <li className={css.movieElement} key={movieElem.id}>
            
            <Link className={css.movieLink} state={{ from: location }} to={`/movies/${movieElem.id}`}>
                <img className={css.moviePoster} src={movieElem.poster_path? `https://image.tmdb.org/t/p/w500/${movieElem.poster_path}` : defaultImg} alt="" />
                <span className={css.movieTitle}>{movieElem.title}</span>              
            </Link>
          </li>)}
      </ul>
    </div>
  )
}