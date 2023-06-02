import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.scss";
import GlobaleContext from "../Context/Createcontext";
import Modetoggle from "../ModeToggle/ModeToggle";
import { Modal } from "antd";

function Order() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GlobaleContext);
  const serviceTax = 14;
  const sbcTax = 0.5;
  const kbcTax = 0.5;
  const bookedSeats = state.bookedSeat;
  const booking = state.booking;
  const [amount, setAmount] = useState(0);
  const [service, setService] = useState(0);
  const [kbc, setKbc] = useState(0);
  const [sbc, setSbc] = useState(0);

  // calculate total bill in useMemo react hook
  const totalPrize = useMemo(() => {
    const booking_total = booking.reduce((acc, item) => acc + item.prize, 0);
    setAmount(booking_total);
    const service_total = (booking_total * serviceTax) / 100;
    setService(service_total);
    const krishi_total = (booking_total * kbcTax) / 100;
    setKbc(krishi_total);
    const swacch_total = (booking_total * sbcTax) / 100;
    setSbc(swacch_total);
    return booking_total + service_total + krishi_total + swacch_total;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booking]);

  const bookedShow = () => {
    // antd modal confirmation dialog box
    Modal.confirm({
      title: "Confirmation",
      content: "Would you like to continue??",
      cancelText: "No",
      okText: "Yes",
      onOk() {
        console.log("Delete confirmed");
        // Perform delete operation or any other logic
        dispatch({ type: "booked", payload: [...bookedSeats, ...booking] });
        dispatch({ type: "booking", payload: [] });
        navigate("/");
      },
      onCancel() {
        // Handle cancel operation or any other logic
      },
    });
  };
  return (
    <div className="order_container">
      <div className="order">
        <h1 className="head_text">Current Order Details</h1>
        <div className="underline"></div>
        <div className="order_details">
          <p className="text">
            Booked Seats:{" "}
            {booking.map((item, i) => (
              <span className="bold_text">
                {item.name}
                {i < booking.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p className="text">
            Amount:<span className="bold_text">{amount} INR</span>{" "}
          </p>
          <p className="text">
            Service Tax @14%:<span className="bold_text">{service} INR</span>
          </p>
          <p className="text">
            Swacch Bharat Cess @0.5%:
            <span className="bold_text">{sbc} INR</span>
          </p>
          <p className="text">
            Krishi Kalyan Cess @0.5%:{" "}
            <span className="bold_text">{kbc} INR</span>
          </p>
          <div className="divider"></div>
          <p className="text">
            Total Amount: <span className="bold_text">{totalPrize} INR</span>
          </p>
        </div>
        <div className="bottom_btn_container">
          <button className="theme_btn" onClick={() => window.history.back()}>
            Go Back
          </button>

          <button className="theme_btn" onClick={() => bookedShow()}>
            Pay and Book Now
          </button>
        </div>
        <Modetoggle />
      </div>
    </div>
  );
}

export default Order;
