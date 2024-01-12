import { useState, useEffect } from "react";
import { STATUSES } from "utils/Constans";
import { getMovieReviews } from "services/movieService";

const Reviews = ({movieId}) => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [statuses, setStatuses] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setStatuses(STATUSES.pending)

        const data = await getMovieReviews(movieId);
        setMovieReviews(data.results);
        console.log(data.results)
        setStatuses(STATUSES.success)

      } catch (error) {
        setStatuses(STATUSES.error);
        setError(error);
      }
    }
    if (movieReviews === null) {
      getReviews();
    }
  }, [movieReviews, movieId])

  return <>
    {statuses === STATUSES.pending && <div>Loading...</div>}
    {statuses === STATUSES.error && error && <div>{error.message}</div>}
    {movieReviews === null ? <div>No reviews yet</div> : 
      <ul>
        {movieReviews.map(review => 
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>)}
        
      </ul>}
  </>
}

export default Reviews;