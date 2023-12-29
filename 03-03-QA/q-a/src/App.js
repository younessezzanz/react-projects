import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { listQuestions } from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [questions, setQuestions] = useState(listQuestions);

  // Add new item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...listQuestions]));
    setQuestions([...listQuestions]);

    notify("تم الاضافة بنجاح", "Success");
  };

  // Remove all items
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    listQuestions.splice(0, listQuestions.length);
    setQuestions([]);

    notify("تم حذف الكل بنجاح", "Success");
  };

  // Remove current item
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setQuestions([...items]);

    notify("تم حذف السوال بنجاح", "Success");

    if (items.length <= 0) {
      deleteAllItems();
    }
  };

  //to push notifaction
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>

          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList questions={questions} deleteOneItem={deleteOneItem} />

            {localStorage.getItem("items") != null ? (
              <button onClick={deleteAllItems} className="btn-color w-100 my-3">
                مسح الكل
              </button>
            ) : (
              ""
            )}
          </Col>
        </Row>

        <ToastContainer />
      </Container>
    </div>
  );
};

export default App;
