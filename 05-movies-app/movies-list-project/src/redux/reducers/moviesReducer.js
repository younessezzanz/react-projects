import { ALLMOVIES } from "../types/moviesType";

// 2- create reducer to set state and change it
const initialValue = { movies: [], pageCount: 0 };

const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data, pageCount: action.pageCount };
    default:
      return state;
  }
};

export default moviesReducer;
