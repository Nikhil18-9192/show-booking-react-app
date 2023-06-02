import React, { useContext, useState } from "react";
import { MdEventSeat } from "react-icons/md";
import GlobaleContext from "../Context/Createcontext";
import "./Audi.scss";

function Audi({ showInfo }) {
  const { state, dispatch } = useContext(GlobaleContext);
  const [selected, setSelected] = useState(state.booking);
  const bookedSeats = state.bookedSeat;

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
  return (
    <div className="seating_container">
      <div className="audi_container">
        <h2 className="head_text">{showInfo.name}</h2>
        <h3 className="sub_head_text">Select Seat and Proceed for Payment</h3>
        {showInfo.seatingArrangement.map((item, index) => (
          <div className="audi" key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Audi;
