import React from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { UserContext } from "./Context/UserContext";
import { BrowserRouter } from "react-router-dom";

import loader from "../Images/loader.gif";
import View from "../Components/View";
import useIsLoading from "./useIsLoading";

const Provider = ({ children }) => {
  const { isLoading } = useIsLoading();

  let render = isLoading ? (
    children
  ) : (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <img src={loader} alt="Loading..." />
    </View>
  );

  console.log("rendered");

  return (
    <ThemeContext>
      <UserContext>
        <BrowserRouter>
          <View
            style={{
              height: "100vh",
              width: "100vw",
              flex: 1,
              flexDirection: "column",
            }}
          >
            {render}
          </View>
        </BrowserRouter>
      </UserContext>
    </ThemeContext>
  );
};

export default Provider;
