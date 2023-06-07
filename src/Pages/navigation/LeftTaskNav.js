import React, { useEffect, useRef, useState } from "react";

import { BsFolder, BsThreeDots } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineStar, AiOutlineBell } from "react-icons/ai";
import { MdFolder, MdOutlineCategory } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { CiTimer } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import View from "../../Components/View";
import Modal from "../../Components/Modal";

const IconsAndText = ({
  icon,
  text,
  action,
  bold = false,
  options = false,
  actionsOfOptions,
}) => {
  let [refOfThreeDots, updateRefofThreeDots] = useState(useRef(null));

  let [showModalClick, updateShowModalClick] = useState(false);

  useEffect(() => {
    updateRefofThreeDots(refOfThreeDots);
  }, []);

  return (
    <>
      {showModalClick && (
        <Modal
          parentRef={refOfThreeDots}
          onClose={() => {
            updateShowModalClick(false);
          }}
        >
          <View style={{ flexDirection: "column" }}>
            {actionsOfOptions.map((value, index) => (
              <View
                onClick={value.onAction}
                key={index}
                style={{ cursor: "pointer" }}
              >
                {value.name}
              </View>
            ))}
          </View>
        </Modal>
      )}
      <View
        style={{
          marginBottom: 10,
          alignItems: "center",
          cursor: "pointer",
          // flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View
          onClick={action}
          style={{ flex: 1, color: "FONT1" }}
          hoverStyle={{ color: "FONT3" }}
        >
          <View>{icon}</View>
          <View
            style={{
              marginLeft: 10,
              fontWeight: bold ? 600 : 500,
              fontSize: 17,
            }}
          >
            {text}
          </View>
        </View>
        {options && (
          <View
            reference={refOfThreeDots}
            onClick={() => {
              updateShowModalClick(true);
            }}
            style={{
              color: "FONT1",
            }}
          >
            <BsThreeDots />
          </View>
        )}
      </View>
    </>
  );
};

const LeftTaskNav = () => {
  const Navigate = useNavigate();
  return (
    <View
      style={{
        bgColor: "BACKGROUND_BLACK_LOW",
        height: "100vh",
        width: "20%",
        flexDirection: "column",
      }}
    >
      <View style={{ padding: 10, flexDirection: "column" }}>
        <View
          style={{
            marginBottom: 20,
            alignItems: "center",
            color: "FONT1",
          }}
        >
          <MdOutlineCategory />
          <View style={{ marginLeft: 10 }}>Categories</View>
        </View>

        {/* <View
        style={{
          alignItems: "center",
          color: "white",
          fontWeight: 600,
          cursor: "pointer",
          padding: 10,
        }}
      >
        <BsFillPlusSquareFill
          style={{ color: "", marginRight: 10, borderRadius: 5 }}
        />
        New note
      </View> */}
        <View style={{ padding: 10, flexDirection: "column" }}>
          <IconsAndText
            icon={<BiBookAlt />}
            text={"Note"}
            action={() => {
              Navigate("/notes");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<FiEdit />}
            text={"White Board"}
            action={() => {
              Navigate("/whiteBoard");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<AiOutlineBell />}
            text={"Reminders"}
            action={() => {
              Navigate("/reminders");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<CiTimer />}
            text={"Habits"}
            action={() => {
              Navigate("/habits");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<AiOutlineBell />}
            text={"Money manage"}
            action={() => {
              Navigate("/moneyManage");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<AiOutlineStar />}
            text={"Favourites"}
            action={() => {
              Navigate("/fav");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<FaTrashAlt />}
            text={"Trash"}
            action={() => {
              Navigate("/trash");
            }}
            bold={true}
          />
        </View>
      </View>

      <View style={{ padding: 10, flexDirection: "column", flex: 1 }}>
        <View
          style={{
            justifyContent: "space-between",
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <View style={{ color: "FONT1" }}>
            <VscLibrary />
            <View style={{ marginLeft: 10, color: "FONT1" }}>Libraries</View>
          </View>
          <AiOutlinePlus />
        </View>

        <View
          style={{
            paddingLeft: 10,
            paddingTop: 10,
            flex: 1,
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {Array(3)
            .fill("a")
            .map((x, y) => (
              <IconsAndText
                icon={<BsFolder />}
                text={"Library"}
                action={() => {
                  Navigate("/library");
                }}
                bold={false}
                options={true}
                actionsOfOptions={[
                  {
                    name: "Delete",
                    onAction: () => {
                      console.log("Yes pressed this delete");
                    },
                  },
                  {
                    name: "Rename",
                    onAction: () => {
                      console.log("Yes pressed this Rename");
                    },
                  },
                ]}
              />
            ))}
        </View>
      </View>
    </View>
  );
};

export default LeftTaskNav;
