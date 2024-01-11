import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const API_KEY = '54eeb2b53b0e8e64148ecb3c56f8a267';

// const AUTH_TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGVlYjJiNTNiMGU4ZTY0MTQ4ZWNiM2M1NmY4YTI2NyIsInN1YiI6IjY1OWVjODNkOTFiNTMwMDFmZGYxZDc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nO1St5NBNyJ5a6UeImi7fZfw0UszE2wBdWyw4I92kNA';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export async function getMovies() {
  const params = {
    api_key: API_KEY,
  };
  return await axios.get(BASE_URL, { params }).then(resp => console.log(resp));
}
