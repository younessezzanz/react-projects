import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";

const App = () => {
  const [itemsData, setItemsData] = useState(items);

  // Get all cat uniqe
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];

  // Filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  //filter by search form
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title.includes(word));
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category
          filterCategory={filterbyCategory}
          allCategories={allCategory}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
};

export default App;
