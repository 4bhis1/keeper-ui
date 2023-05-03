import Provider from "./Utils/provider";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";
import Forgot from "./Pages/auth/Forgot";
import OTP from "./Pages/auth/OTP";
import View from "./Components/View";
import LeftSectionImage from "./Pages/auth/LeftSectionImage";
import LeftTaskNav from "./Pages/navigation/LeftTaskNav";
import Nav from "./Pages/navigation/Nav";

import Notes from "./Pages/keeper/Notes";
import Habits from "./Pages/habits/Habits";

function App() {
  let login = true;

  return (
    <Provider>
      {!login ? (
        <View>
          <LeftSectionImage />
          <Routes>
            <Route exact path="/" element={<Navigate to={"/login"} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/forgot-password" element={<Forgot />} />
            <Route exact path="/confirm-otp" element={<OTP />} />
          </Routes>
        </View>
      ) : (
        <View style={{ overflow: "hidden" }}>
          <LeftTaskNav />
          <View
            style={{
              bgColor: "green",
              flex: 1,
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Nav />
            <View style={{ flex: 1, overflow: "hidden" }}>
              <Routes>
                <Route exact path="/" element={<Navigate to={"/notes"} />} />
                <Route exact path="/notes" element={<Notes />} />
                <Route exact path="/habits" element={<Habits />} />
                <Route exact path="/whiteBoard" element={<Habits />} />
                <Route exact path="/reminders" element={<Habits />} />
                <Route exact path="/fav" element={<Habits />} />
                <Route exact path="/trash" element={<Habits />} />
                <Route exact path="/moneyManage" element={<Habits />} />
                <Route exact path="/library" element={<Habits />} />
                {/* <Route exact path="/anime" element={<FisrtScreen />} /> */}
                {/* 
                <Route exact path="/movies/:movieId" element={<MovieWatch />} />
                <Route exact path="/series/:seriesId" element={<Main />} />
                <Route exact path="/anime/watch" element={<Main />} /> 
              */}
              </Routes>
            </View>
          </View>
        </View>
      )}
    </Provider>
  );
}

export default App;
