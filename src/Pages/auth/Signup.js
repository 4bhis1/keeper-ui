import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "../../Components/View";
import useFormSubmit from "../../Utils/useFormSubmit";

const Signup = () => {
  const Navigate = useNavigate();

  const { formData, handleSubmit, handleInputChange } = useFormSubmit(
    {},
    "/signup",
    () => {
      Navigate("/login");
    }
  );

  return (
    <View style={{ bgColor: "blue", flex: 1 }}>
      <View style={{ flexDirection: "column" }}>
        <View>Signin</View>
        <View>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </View>
        <View>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </View>
        <View>
          <input
            type="email"
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
        <View>
          <input
            type="text"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </View>
        <View
          onClick={(e) => {
            if (formData.password === formData.confirmPassword) {
              handleSubmit(e);
            } else {
              console.error("Password and confirm password do not match");
            }
          }}
        >
          Signin
        </View>
        <View>Or</View>
        <View>Signin with Google</View>
        <View
          onClick={() => {
            Navigate("/login");
          }}
        >
          Already have account? Login
        </View>
      </View>
    </View>
  );
};

export default Signup;
