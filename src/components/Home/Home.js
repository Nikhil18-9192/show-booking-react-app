import React, { useContext } from "react";
import "./Home.scss";
import ModeToggle from "../ModeToggle/ModeToggle";
import { Link } from "react-router-dom";
import GlobaleContext from "../Context/Createcontext";
import Button from "../Button/Button";

function Home() {
  //  get state from global context and store in shows array
  const { state } = useContext(GlobaleContext);
  const shows = state.shows;
  return (
    <div className="home_container">
      <div className="container_item">
        <h1 className="head_text">BOOK MY SHOW</h1>
        <Link to="/revenue">
          <Button text="Revenue" />
        </Link>
        <div className="show_list_container">
          <h3 className="sub_head_text">Select the Show</h3>
          <div className="show_list">
            {/* loop through shows array and display */}
            {shows.map((show, i) => (
              <Link key={show.id} to={`/selected-show/${show.id}}`}>
                <button className="show_text">{show.name}</button>
              </Link>
            ))}
          </div>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Home;
