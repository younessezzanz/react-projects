import React from "react";
import { Row, Col } from "react-bootstrap";

function DatesList({ persons }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {persons.length ? (
            persons.map((p) => (
              <div key={p.id} className="d-flex border-bottom mx-3 my-2">
                <img src={p.img} className="img-avatar" alt="profile" />

                <div className="px-3">
                  <p className="d-inline fs-5 name-font">{p.name}</p>
                  <p className="fs-6">{p.time}</p>
                </div>
              </div>
            ))
          ) : (
            <h2 className="p-5 text-center">No appointments for today.</h2>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default DatesList;
