import React from "react";
import View from "../../Components/View";
import myImage1 from "../../Images/cr1.jpeg";


const LeftSectionImage = () => {
  return (
    <View
      style={{
        height: "100vh",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={myImage1} alt={"my Image"} style={{ flex: 1 }} />
    </View>
  );
};

export default LeftSectionImage;
