import React from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { getAllMovies, getMoviesSearch } from "../redux/actions/moviesAction";

function NavBar() {
  const dispatchMovies = useDispatch();

  const onSearch = (word) => {
    search(word);
  };

  // To search in api
  const search = async (word) => {
    if (word === "") {
      dispatchMovies(getAllMovies());
    } else {
      //query = The Family Plan
      dispatchMovies(getMoviesSearch(word));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <Link to="/">
              <img className="logo" src={logo} alt="dfs" />
            </Link>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
