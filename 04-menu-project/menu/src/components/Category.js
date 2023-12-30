import React from "react";
import { Row, Col } from "react-bootstrap";
import Roll from "react-reveal/Roll";

const Category = ({ filterCategory, allCategories }) => {
  //to filter by category
  const onFilter = (cat) => {
    filterCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center">
        <Roll>
          {allCategories.length >= 1 ? (
            allCategories.map((cat, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => onFilter(cat)}
                    style={{ border: "1px solid #b45b35" }}
                    className="btn mx-2"
                  >
                    {cat}
                  </button>
                </div>
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات لاان</h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
