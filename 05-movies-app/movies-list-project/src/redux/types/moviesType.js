import { API_LANG, API_PAGE } from "../../api/Axios";
import requests from "../../api/Requests";

const ALLMOVIES = "ALLMOVIES";
const urlMoviesPopular = `${requests.fetchPopular}&language=${API_LANG}&page=${API_PAGE}`;

export { ALLMOVIES, urlMoviesPopular };
