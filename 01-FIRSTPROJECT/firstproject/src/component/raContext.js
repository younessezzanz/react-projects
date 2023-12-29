import React, { createContext, useState } from "react";

const ColorContext = createContext();

const UseContextProvider = ({ children }) => {
  const [data, setData] = useState("red");

  const changeData = (color) => {
    setData(color);
  };

  return (
    <ColorContext.Provider value={{ data }}>{children}</ColorContext.Provider>
  );
};

export { UseContextProvider, ColorContext };
