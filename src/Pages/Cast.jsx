import { useState, useEffect } from "react";
import { STATUSES } from "utils/Constans";
import { getMovieCast } from "services/movieService";

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
        console.log(data.cast.slice(0, 10));
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

  return <div>
    {statuses === STATUSES.pending && <div>Loading...</div>}
    {statuses === STATUSES.error && error && <div>{error.message}</div>}
    {movieCast && <ul>
      {movieCast.map(actor =>
        <li key={actor.id}>
          <p>{actor.name}</p>
        </li>
      )}
    </ul>}
  </div>
}

export default Cast;