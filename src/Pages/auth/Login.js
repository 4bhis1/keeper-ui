import React from "react";
import { useNavigate } from "react-router-dom";
import View from "../../Components/View";
import useFormSubmit from "../../Utils/useFormSubmit";
import { useUser } from "../../Utils/hooks";

const Login = () => {
  const Navigate = useNavigate();

  const { login } = useUser();

  const { formData, handleSubmit, handleInputChange, response } = useFormSubmit(
    {},
    "/login"
  );

  console.log("\n@@@  file: Login.js:10  response:", response);

  if (response) {
    login(response.token, response.user);
  }

  return (
    <View style={{ bgColor: "blue", flex: 1 }}>
      <View style={{ flexDirection: "column" }}>
        <View>Login</View>
        <View>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </View>
        <View>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </View>
        <View
          onClick={() => {
            Navigate("/forgot-password");
          }}
        >
          Forgot Password
        </View>
        <View
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Login Button
        </View>
        <View>Or</View>
        <View>Login with Google</View>

        <View
          onClick={() => {
            Navigate("/signup");
          }}
        >
          Don't have account? Create One
        </View>
      </View>
    </View>
  );
};

export default Login;
