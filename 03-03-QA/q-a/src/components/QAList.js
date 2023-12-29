import React from "react";
import { Row, Accordion } from "react-bootstrap";

const QAList = ({ deleteOneItem }) => {
  const itemsQut = JSON.parse(localStorage.getItem("items"));

  const onDeleteItem = (id) => {
    if (localStorage.getItem("items") != null) {
      const index = itemsQut.findIndex((item) => item.id === id);
      itemsQut.splice(index, 1);

      deleteOneItem(itemsQut);
    }
  };

  return (
    <Row>
      <Accordion defaultActiveKey="0">
        {localStorage.getItem("items") != null ? (
          itemsQut.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>

                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline">{item.a}</div>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-color px-4 py-2"
                  >
                    مسح
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5">لا يوجد اسئله الان</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
