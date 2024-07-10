import React from "react";
import "./YesButton.css";
import Title from "./Title";
import { Link } from "react-router-dom";
const YesButton = () => {
  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title">
          <Title />
        </Link>
        <div className="yes-button-container">
          <iframe
            width="1000"
            height="615"
            src="https://www.youtube.com/embed/Gnm3hIcjiCQ?autoplay=1&si=cFUp5b_capmfbOP0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YesButton;
