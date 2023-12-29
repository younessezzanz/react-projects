import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchAxios() {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  const fetcAxios = async (url) => {
    const response = await axios.get(url);
    setData(response.data);
  };

  useEffect(() => {
    // fetchData("https://jsonplaceholder.typicode.com/posts");
    fetcAxios("https://jsonplaceholder.typicode.com/posts");
  }, []);

  console.log(data);
  const listItems = data.map((item) => <li key={item.id}>{item.title}</li>);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default FetchAxios;
