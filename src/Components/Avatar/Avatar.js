import React from "react";
import View from "../View";

const Avatar = ({ name, image, onClick }) => {
  const [firstName, lastName] = name.split(" ");
  const nameOfAvatar =
    firstName[0].toString().toUpperCase() +
    lastName[0].toString().toUpperCase();
  return (
    <View
      style={{
        height: 40,
        width: 40,
        bgColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
      }}
      onClick={onClick}
    >
      {image ? void 0 : <View>{nameOfAvatar}</View>}
    </View>
  );
};

export default Avatar;
