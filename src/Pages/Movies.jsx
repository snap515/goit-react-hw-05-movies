import { useEffect, useState } from "react";
import { STATUSES } from "utils/Constans";
import { getMovieByTitle } from "services/movieService";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [statuses, setStatuses] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [hasMounted, setHasMounted] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q')

  const onSubmit = (e) => {
    e.preventDefault()
    const newSearchText = e.currentTarget.elements.searchText.value.trim();
    if (!newSearchText || newSearchText === searchText) {
      return;
    }
    setSearchParams({
      q: newSearchText
    })
    setSearchText(newSearchText);
    if (!hasMounted) {
      setHasMounted(true)
    }
  }

  useEffect(() => {
    if (hasMounted) {
      const getMovieBySearch = async () => {
        try {
          setStatuses(STATUSES.pending)
          const data = await getMovieByTitle(searchText);
          if (data.results.length > 0) {
            setSearchedMovies(data)
          }
          setStatuses(STATUSES.success)
        }
        catch (error) {
          setStatuses(STATUSES.error);
          setError(error);
        }
      }
      getMovieBySearch();
    }
  },[searchText,hasMounted])

  return <div>
    <SearchForm onSubmit ={onSubmit} query={query}></SearchForm>
    {statuses === STATUSES.pending && <div>Loading..</div>}
    {statuses === STATUSES.error && error && <div>{error.message}</div>}
    {searchedMovies && <MoviesList movies={searchedMovies}></MoviesList>}
  </div>
}

export default Movies;