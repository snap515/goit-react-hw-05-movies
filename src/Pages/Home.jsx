import { MoviesList } from "components/MoviesList/MoviesList"

const Home = ({ trendMovies }) => {
  if (!trendMovies) {
    return <div>Loading...</div>
  }
  return <MoviesList movies={trendMovies}></MoviesList>
}

export default Home;