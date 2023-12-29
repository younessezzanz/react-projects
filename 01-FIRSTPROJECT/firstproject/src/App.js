import React from "react";
// import StateExample from "./component/state";
import "./App.css";
// import { ColorContext } from "./component/raContext";
import FetchAxios from "./component/FetchAxios";
// import RaReducer from "./component/raReducer";

const App = () => {
  // const { data } = useContext(ColorContext);

  return (
    <div className="App">
      {/* <RaReducer /> */}
      <FetchAxios />
      {/* {data} */}
    </div>
  );
};

export default App;
