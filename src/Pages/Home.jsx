import { MoviesList } from "components/MoviesList/MoviesList"
import { useEffect, useState } from "react";
import { getTrendingMovies } from "services/movieService";
import { STATUSES } from "utils/Constans";

const Home = () => {
    const [trendMovies, setTrendMovies] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [statuses, setStatuses] = useState(STATUSES.idle);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setStatuses(STATUSES.pending)

        const data = await getTrendingMovies();
        setTrendMovies(data);
        setStatuses(STATUSES.success)

      } catch (error) {
        setStatuses(STATUSES.error);
        setError(error);
      }
    }
    if (trendMovies === null) {
      getTrendMovies();
    }
  }, [trendMovies])
  return trendMovies && <MoviesList movies={trendMovies}></MoviesList>
}

export default Home;