import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

function StateExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const inputRef = useRef(0);

  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  }

  const addOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount(count - 1);
  };

  const addText = () => {
    setText("I am added to state.");
  };

  const removeText = () => {
    setText("I am removed from state.");
  };

  useEffect(() => {
    console.log("Hello world");
  }, [count]);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>

      <Button onClick={addOne}>+</Button>
      <Button onClick={minusOne}>-</Button>
      <p>You clicked {count} times</p>

      <Button onClick={addText}>+</Button>
      <Button onClick={removeText}>-</Button>
      <label>Text is : {text}</label>
    </div>
  );
}

export default StateExample;
