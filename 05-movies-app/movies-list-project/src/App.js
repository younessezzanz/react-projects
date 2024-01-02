import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <div className="font color-body">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <MoviesList />
              </>
            }
          />

          <Route
            path="/movie/:id"
            element={
              <>
                <NavBar />
                <MovieDetails />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
