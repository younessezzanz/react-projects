import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";

import CardMovie from "./CardMovie";
import NotFoundMovie from "./NotFoundMovie";
import PaginationComponent from "./Pagination";
import { getAllMovies } from "../redux/actions/moviesAction";

function MoviesList({ getPage }) {
  const [movies, setMovies] = useState([]);

  // 4- Access data from store reducer with useSelector
  const dataMovies = useSelector((state) => state.movies);

  // 5- Change counter in reducer with dispatch
  const dispatchMovies = useDispatch();

  useEffect(() => {
    dispatchMovies(getAllMovies());
  }, []);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Container>
      <Row className="mt-3">
        {movies.length >= 1 ? (
          movies.map((mov) => {
            return <CardMovie key={mov.id} mov={mov} />;
          })
        ) : (
          <NotFoundMovie />
        )}

        {movies.length >= 1 ? <PaginationComponent /> : null}
      </Row>
    </Container>
  );
}

export default MoviesList;
