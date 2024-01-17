import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
// ('https://api.themoviedb.org/3/find/external_id?external_source=');
// https://api.themoviedb.org/3/movie/movie_id?language=en-US
const API_KEY = '54eeb2b53b0e8e64148ecb3c56f8a267';

const options = {
  api_key: API_KEY,
  AUTH_TOKEN:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGVlYjJiNTNiMGU4ZTY0MTQ4ZWNiM2M1NmY4YTI2NyIsInN1YiI6IjY1OWVjODNkOTFiNTMwMDFmZGYxZDc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nO1St5NBNyJ5a6UeImi7fZfw0UszE2wBdWyw4I92kNA',
};

// const AUTH_TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGVlYjJiNTNiMGU4ZTY0MTQ4ZWNiM2M1NmY4YTI2NyIsInN1YiI6IjY1OWVjODNkOTFiNTMwMDFmZGYxZDc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nO1St5NBNyJ5a6UeImi7fZfw0UszE2wBdWyw4I92kNA';
axios.defaults.headers.common['Authorization'] = options.AUTH_TOKEN;

export function getTrendingMovies() {
  const data = axios
    .get(`${BASE_URL}/trending/movie/day`, { options })
    .then(resp => {
      return resp.data;
    });
  return data;
}

export function getMovieById(id) {
  const data = axios.get(`${BASE_URL}/movie/${id}`, { options }).then(resp => {
    return resp.data;
  });
  return data;
}

export function getMovieCast(id) {
  const data = axios
    .get(`${BASE_URL}/movie/${id}/credits`, { options })
    .then(resp => {
      return resp.data;
    });
  return data;
}

export function getMovieReviews(id) {
  const data = axios
    .get(`${BASE_URL}/movie/${id}/reviews`, { options })
    .then(resp => {
      return resp.data;
    });
  return data;
}

export function getMovieByTitle(title) {
  const data = axios
    .get(`${BASE_URL}/search/movie?query=${title}`, { options })
    .then(resp => {
      return resp.data;
    });
  return data;
}
