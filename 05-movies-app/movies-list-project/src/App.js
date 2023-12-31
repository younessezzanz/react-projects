import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { instance, API_LANG, API_PAGE } from "./Axios";
import requests from "./Requests";

import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  //get all movies by axios
  const getAllMovies = async () => {
    const url = `${requests.fetchPopular}&language=${API_LANG}&page=${API_PAGE}`;
    const res = await instance.get(url);

    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  // Get current page
  const getPage = async (page) => {
    const url = `${requests.fetchPage}&page=${page}&language=${API_LANG}`;
    const res = await instance.get(url);

    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  // To search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      //query = The Family Plan
      const url = `${requests.searchMovies}&query=${word}&language=${API_LANG}`;
      const res = await instance.get(url);

      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };

  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />

            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
