import React from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { UserContext } from "./Context/UserContext";
import { BrowserRouter } from "react-router-dom";

const Provider = ({ children }) => {


  

  return (
    <ThemeContext>
      <UserContext>
        <BrowserRouter>{children}</BrowserRouter>
      </UserContext>
    </ThemeContext>
  );
};

export default Provider;
