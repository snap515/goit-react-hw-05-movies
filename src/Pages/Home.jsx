import { MoviesList } from "components/MoviesList/MoviesList"

const Home = ({ trendMovies }) => {
  return trendMovies && <MoviesList movies={trendMovies}></MoviesList>
}

export default Home;