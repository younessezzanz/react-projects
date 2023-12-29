import React, { useState } from "react";
import { Row, Form, Col } from "react-bootstrap";
import { listQuestions } from "../data";

const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState("");
  const [ans, setAns] = useState("");

  const addNewItem = () => {
    if (qu === "" || ans === "") {
      notify("من فضلك اكمل البيانات", "Error");
      return;
    }

    listQuestions.push({
      id: Math.floor(Math.random() * 10000),
      q: qu,
      a: ans,
    });
    setQu("");
    setAns("");

    onAdd();
  };

  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control
          onChange={(e) => setQu(e.target.value)}
          value={qu}
          type="text"
          placeholder="ادخل السوال"
        />
      </Col>

      <Col sm="5">
        <Form.Control
          onChange={(e) => setAns(e.target.value)}
          value={ans}
          type="text"
          placeholder="ادخل الاجابه"
        />
      </Col>
      <Col sm="2">
        <button onClick={addNewItem} className="btn-color w-100" type="submit">
          اضافة
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;
