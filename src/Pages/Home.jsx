import { Link } from "react-router-dom"

const Home = ({ trendMovies }) => {
  if (!trendMovies) {
    return <div>Loading...</div>
  }
  console.log(trendMovies)
  return <div>
    <ul>
      {trendMovies.results.map(movie =>
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>)}
    </ul>
  </div>
}

export default Home;