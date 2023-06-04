import { useContext } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import GlobaleContext from "./components/Context/Createcontext";
import Selectedshow from "./components/Selectedshow/Selectedshow";
import Order from "./components/Order/Order";
import Revenue from "./components/Revenue/Revenue";
import Register from "./components/Register/Register";
import Protected from "./components/Protected/Protected";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";

function App() {
  // use context for get data from context state
  const { state } = useContext(GlobaleContext);
  // take toggle state of dark mode information and store it in variable
  const is_dark = state.toggle;
  const isSignedIn = useSelector((state) => state.user.loginUser);
  // apply classes conditionally on toggle state
  const appClass = is_dark ? "App_dark" : "App";
  const textColor = is_dark ? "#fff" : "#000";
  return (
    <div className={appClass} style={{ "--text-color": textColor }}>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Home />
            </Protected>
          }
        />
        <Route
          exact
          path="/selected-show/:show"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Selectedshow />
            </Protected>
          }
        />
        <Route
          path="/order"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Order />
            </Protected>
          }
        />
        <Route
          path="/revenue"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Revenue />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
