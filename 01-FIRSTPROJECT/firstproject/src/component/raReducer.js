import React, { useReducer } from "react";

const colorReducer = (state, action) => {
  if (action.color === "white") {
    state = "White";
  } else if (action.color === "black") {
    state = "Black";
  } else {
    state = "Red";
  }

  return state;
};
function RaReducer() {
  const [color, dispatch] = useReducer(colorReducer, "black");

  return (
    <div>
      <strong>Color is : {color}</strong>
      <button onClick={() => dispatch({ color: "white" })}>WHITE</button>
      <button onClick={() => dispatch({ color: "black" })}>BLACK</button>
      <button onClick={() => dispatch({})}>Red</button>
    </div>
  );
}

export default RaReducer;
