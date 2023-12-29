import React from "react";
import { Row, Col } from "react-bootstrap";

const DatesCount = ({ persons }) => {
  return (
    <Row className="justify-content-center my-4">
      <Col sm="8" className="title-font">
        You have {persons.length} appointments
      </Col>
    </Row>
  );
};

export default DatesCount;
