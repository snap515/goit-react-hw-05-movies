import { useState, useEffect } from "react";
import { STATUSES } from "utils/Constans";
import { getMovieCast } from "services/movieService";

import { defaultImg } from "../MovieDetails/MovieDetails";
import css from './Cast.module.css'
import { Loader } from "components/Loader/Loader";

const Cast = ({movieId}) => {
  const [movieCast, setMovieCast] = useState(null);
  const [statuses, setStatuses] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        setStatuses(STATUSES.pending)

        const data = await getMovieCast(movieId);
        setMovieCast(data.cast.slice(0, 10));
        setStatuses(STATUSES.success)

      } catch (error) {
        setStatuses(STATUSES.error);
        setError(error);
      }
    }
    if (movieCast === null) {
      getCast();
    }
  }, [movieCast, movieId])
  console.log(movieCast)

  return (
    <div className={css.castWrapper}>
    {statuses === STATUSES.pending && <Loader/>}
    {statuses === STATUSES.error && error && <div>{error.message}</div>}
    {movieCast && (
      <ul className={css.actorsList}>
        {movieCast.map(actor =>
          <li className={css.actor} key={actor.id}>
            <img className={css.actorsFoto} src={actor.profile_path ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}` : defaultImg} alt="actor" />
            <h3 className={css.actorsText}>{actor.name}</h3>
          </li>)}
      </ul>)}
    </div>)
}

export default Cast;