import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import NotFoundMovie from "./NotFoundMovie";
import PaginationComponent from "./Pagination";

function MoviesList({ movies, getPage, pageCount }) {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <NotFoundMovie />
      )}

      {movies.length >= 1 ? (
        <PaginationComponent getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
}

export default MoviesList;
