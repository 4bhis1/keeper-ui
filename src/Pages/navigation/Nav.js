import React, { useState } from "react";
import View from "../../Components/View";
import LightAndDarkModeSwitch from "../../Components/Switch/LightAndDarkModeSwitch";
import Avatar from "../../Components/Avatar/Avatar";
import { useUser } from "../../Utils/hooks";

const Nav = () => {
  const { logout } = useUser();

  return (
    <>
      <View
        style={{
          backgroundColor: "#c0c0c0",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View>
          <input type={"text"} placeholder={"enter here to search"} />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LightAndDarkModeSwitch />
          {/* <View
            onClick={() => {
              if (view === "row") updateView("col");
              else updateView("row");
            }}
          >
            List View
          </View> */}
          <View style={{ cursor: "pointer", position: "relative" }}>
            <Avatar name={"Abhishek Kumar"} onClick={logout} />
            {/* <View style={{position : "Absolute", top : 40, zInde : 2}}>
              Nice
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default Nav;
