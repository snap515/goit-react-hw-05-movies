import { useState, useEffect } from "react";
import { STATUSES } from "utils/Constans";
import { getMovieReviews } from "services/movieService";
import css from './Reviews.module.css'
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [statuses, setStatuses] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setStatuses(STATUSES.pending)

        const data = await getMovieReviews(movieId);
        if (data.results.length !== 0) {
          setMovieReviews(data.results);
        }

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
    {statuses === STATUSES.error && error && <div>{error.message}</div>}
    {(!movieReviews && statuses === STATUSES.success) && <div className={css.reviewsText}>No reviews yet</div>}
    {movieReviews &&
      <div className={css.reviewsWrapper}>
        <ul className={css.reviewsList}>
          {movieReviews.map(review => 
            <li className={css.reviewsElem} key={review.id}>
              <h3 className={css.reviewsTitle}>{review.author}</h3>
              <p className={css.reviewsText}>{review.content}</p>
            </li>)}
        </ul>
      </div>
      
    }
  </>
}

export default Reviews;