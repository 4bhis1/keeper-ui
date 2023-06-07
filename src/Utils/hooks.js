import { useContext } from "react";
import { COLORS, FONT_COLORS } from "../Theme/Colors";
import { themeContext } from "./Context/ThemeContext";
import { userContext } from "./Context/UserContext";
import { useNavigate } from "react-router-dom";

export const useTheme = () => {
  let [theme, changeTheme] = useContext(themeContext);

  let toogleTheme = () => {
    changeTheme(() => {
      return theme === "dark" ? "light" : "dark";
    });
  };

  const colors = COLORS[theme === "dark" ? "DARK" : "LIGHT"];
  const fontColor = FONT_COLORS[theme === "dark" ? "DARK" : "LIGHT"];

  return [theme, toogleTheme, { colors, fontColor }];
};

export const useUser = () => {
  let { user, setUser } = useContext(userContext);
  const Navigate = useNavigate();

  let logout = () => {
    console.log("Nice clicke on loffout");
    window.localStorage.removeItem("token");
    Navigate("/login");
  };

  let login = (token, user) => {
    window.localStorage.setItem("token", token);
    setUser(">>");
  };

  return { user, logout, login };
};
