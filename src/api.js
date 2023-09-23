import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8700cb1565a0c17dafc74df6a959ddf1';

export const getTrendtMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};
