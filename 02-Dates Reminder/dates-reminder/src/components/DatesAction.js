import React from "react";
import { Row, Col } from "react-bootstrap";

function DatesAction({ onDelete, onViewData }) {
  return (
    <Row className="justify-content-center my-4">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={onDelete} className="btn-style p-2">
          Delete All
        </button>
        <button onClick={onViewData} className="btn-style p-2">
          Show Data
        </button>
      </Col>
    </Row>
  );
}

export default DatesAction;
