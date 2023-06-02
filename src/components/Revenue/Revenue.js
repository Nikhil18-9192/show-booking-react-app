import React, { useContext, useState, useMemo } from "react";
import "./Revenue.scss";
import GlobaleContext from "../Context/Createcontext";
import { Link } from "react-router-dom";

function Revenue() {
  const { state } = useContext(GlobaleContext);
  const serviceTax = 14;
  const sbcTax = 0.5;
  const kbcTax = 0.5;
  const bookedSeats = state.bookedSeat;
  const [amount, setAmount] = useState(0);
  const [service, setService] = useState(0);
  const [kbc, setKbc] = useState(0);
  const [sbc, setSbc] = useState(0);

  // calculate total revenue in useMemo react hook
  useMemo(() => {
    const booking_total = bookedSeats.reduce(
      (acc, item) => acc + item.prize,
      0
    );
    setAmount(booking_total);
    const service_total = (booking_total * serviceTax) / 100;
    setService(service_total);
    const krishi_total = (booking_total * kbcTax) / 100;
    setKbc(krishi_total);
    const swacch_total = (booking_total * sbcTax) / 100;
    setSbc(swacch_total);
    return booking_total + service_total + krishi_total + swacch_total;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookedSeats]);
  return (
    <div className="revenue_container">
      <div className="btn-container">
        <Link to="/">
          <button className="theme_btn">Go back</button>
        </Link>
      </div>
      <div className="order">
        <h1 className="head_text">Total Sales</h1>
        <div className="underline"></div>
        <div className="order_details">
          <p className="text">
            Revenue:<span className="bold_text">{amount} INR</span>{" "}
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
        </div>
      </div>
    </div>
  );
}

export default Revenue;
