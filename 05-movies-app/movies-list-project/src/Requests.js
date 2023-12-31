import { API_KEY } from "./Axios";

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}`,
  searchMovies: `/search/movie?api_key=${API_KEY}`,
  fetchPage: `/movie/popular?api_key=${API_KEY}`,
  getMovie: `/movie`,
};

export default requests;
