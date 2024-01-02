import axios from "axios";

const API_KEY = "f4e45659511ee52572e2eb1123bf7942";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_LANG = "en";
const API_PAGE = 1;

// Create instance of axios
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { instance, API_KEY, API_BASE_URL, API_LANG, API_PAGE };
