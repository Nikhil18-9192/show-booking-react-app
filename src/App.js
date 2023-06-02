import { useContext } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import GlobaleContext from "./components/Context/Createcontext";
import Selectedshow from "./components/Selectedshow/Selectedshow";
import Order from "./components/Order/Order";
import Revenue from "./components/Revenue/Revenue";

function App() {
  // use context for get data from context state
  const { state } = useContext(GlobaleContext);
  // take toggle state of dark mode information and store it in variable
  const is_dark = state.toggle;
  // apply classes conditionally on toggle state
  const appClass = is_dark ? "App_dark" : "App";
  const textColor = is_dark ? "#fff" : "#000";
  return (
    <div className={appClass} style={{ "--text-color": textColor }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/selected-show/:show" element={<Selectedshow />} />
        <Route path="/order" element={<Order />} />
        <Route path="/revenue" element={<Revenue />} />
      </Routes>
    </div>
  );
}

export default App;
