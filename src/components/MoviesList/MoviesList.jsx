import { Link, useLocation } from "react-router-dom"

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log('moviesList location', location)
  return (
    <div>
      <ul>
        {movies.results.map(movieElem =>
          <li key={movieElem.id}>
            <Link state={{from: location}} to={`/movies/${movieElem.id}`}>{movieElem.title}</Link>
          </li>)}
      </ul>
    </div>
  )
}