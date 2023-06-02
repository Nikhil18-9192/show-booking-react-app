import React, { useContext, useEffect, useState } from "react";
import "./Selectedshow.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import GlobaleContext from "../Context/Createcontext";
import Modetoggle from "../ModeToggle/ModeToggle";
import { Alert } from "antd";
import Audi from "../Audi/Audi";
import Button from "../Button/Button"

function Selectedshow() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { state} = useContext(GlobaleContext);
  const shows = state.shows;
  const [selected, setSelected] = useState([]);
  const { show } = useParams();
  const [showId, setShowId] = useState(show);
  const showInfo = state.shows.filter(
    (item) => item.id === parseInt(showId)
  )[0];

  // proceed next function
  const proceedNext = () => {
    if (selected.length < 1) {
      setShowAlert(true);
      return;
    }
    navigate("/order");
  };
  // select show function
  const selectShow = (show) => {
    setSelected([]);
    setShowId(show.id);
  };

  useEffect(() => {
    const selectedSeats = state.booking
    setSelected(selectedSeats) 
  },[state.booking])

  return (
    <div className="selected_show_container">
      <div className="container_item">
        {/* antd alert if no seat is selected */}
        {showAlert && (
          <Alert
            style={{
              width: "320px",
              left: "50%",
              top: "0",
              transform: "translate(-50%, -50%)",
              position: "absolute",
            }}
            message="Please select at least one seat"
            type="error"
            showIcon={true}
            closable
            onClose={() => setShowAlert(false)}
          />
        )}
        <Link to="/">
        <Button text="Go Back" />
        </Link>
        <div className="show_list">
          <h2 className="title">Select Show :</h2>
          {/* display shows */}
          {shows.map((show, i) => (
           
            <Button text={show.name} key={i}
            onClick={() => selectShow(show)} />
          ))}
        </div>
        <Audi showInfo={showInfo} />
        <div className="bottom_btn_container">
          <Button text="Other Shows" onClick={() => navigate("/")} />
          <Button text="Proceed Next" onClick={proceedNext} />   
        </div>
        <Modetoggle />
      </div>
    </div>
  );
}

export default Selectedshow;
