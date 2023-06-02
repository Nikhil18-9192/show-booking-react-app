import React, { useContext, useState } from "react";
import "./Selectedshow.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import GlobaleContext from "../Context/Createcontext";
import Modetoggle from "../ModeToggle/ModeToggle";
import { Alert } from "antd";
import { MdEventSeat } from "react-icons/md";

function Selectedshow() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { state, dispatch } = useContext(GlobaleContext);
  //   const [select, setSelect] = useState(false);
  const shows = state.shows;
  const [selected, setSelected] = useState(state.booking);
  const bookedSeats = state.bookedSeat;
  const { show } = useParams();
  const [showId, setShowId] = useState(show);
  const showInfo = state.shows.filter(
    (item) => item.id === parseInt(showId)
  )[0];

  // select seat function to handle select and deselect click on seat
  const handleSelectClick = (item) => {
    if (selected.includes(item)) {
      // if seat is already selected
      // spread the selected seats array and assign it to arr
      const arr = [...selected];
      // filter arr with check selected seat is available in array if available filter it and return filtered array
      const filterArr = arr.filter((seat) => seat.name !== item.name);
      // filtered array set to the selected state
      setSelected(filterArr);
      // update context state booking with filtered array
      dispatch({
        type: "booking",
        payload: filterArr,
      });
    } else {
      // if seat is not selected
      // copy selected seats array into the arr
      const arr = [...selected];
      // push selected seat object into the arr
      arr.push(item);
      // update selected array
      setSelected(arr);
      // update context state booking with array
      dispatch({
        type: "booking",
        payload: arr,
      });
    }
  };

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
          <button className="theme_btn">Go back</button>
        </Link>
        <div className="show_list">
          <h2 className="title">Select Show :</h2>
          {/* display shows */}
          {shows.map((show, i) => (
            <button
              key={i}
              onClick={() => selectShow(show)}
              className="theme_btn"
            >
              {show.name}
            </button>
          ))}
        </div>
        <div className="seating_container">
          <div className="audi_container">
            <h2 className="head_text">{showInfo.name}</h2>
            <h3 className="sub_head_text">
              Select Seat and Proceed for Payment
            </h3>
            {
            
              showInfo.seatingArrangement.map((item, index)=>( <div className="audi">
              <div className="seat_info">
                <p className="info_text">{`${item.category}: ${item.price} RS`}</p>
              </div>
              <div className="seat_container">
                {item.row.map((item, i) => (
                  <MdEventSeat
                  key={i}
                  className={`seat_icon ${
                    selected.includes(item)
                      ? "selected_icon"
                      : bookedSeats.includes(item)
                      ? "booked_icon"
                      : ""
                  } ${item.class}`}
                  onClick={() => handleSelectClick(item)}
                />
                ))}
              </div>
            </div>))}
          </div>
        </div>
        <div className="bottom_btn_container">
          <button className="theme_btn" onClick={() => navigate("/")}>
            Other Shows
          </button>

          <button className="theme_btn" onClick={() => proceedNext()}>
            Proceed Next
          </button>
        </div>
        <Modetoggle />
      </div>
    </div>
  );
}

export default Selectedshow;
