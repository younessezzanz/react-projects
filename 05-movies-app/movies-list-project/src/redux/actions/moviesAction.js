import { ALLMOVIES, urlMoviesPopular } from "../types/moviesType";
import { API_LANG, instance } from "../../api/Axios";
import requests from "../../api/Requests";

// Get all movies by axios
const getAllMovies = () => {
  return async (dispatch) => {
    const res = await instance.get(urlMoviesPopular);

    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};

// Get searched movies by axios
const getMoviesSearch = (word) => {
  return async (dispatch) => {
    const url = `${requests.searchMovies}&query=${word}&language=${API_LANG}`;
    const res = await instance.get(url);

    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};

// Get current page
const getPage = (page) => {
  return async (dispatch) => {
    const url = `${requests.fetchPage}&page=${page}&language=${API_LANG}`;
    const res = await instance.get(url);

    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};

export { getAllMovies, getMoviesSearch, getPage };
