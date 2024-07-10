import React from "react";
import "./TripTemplete.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const TripTemplete = ({
  month,
  text2,
  imgLeft,
  imgRight,
  handleNext,
  handlePrev,
  imgCenter,
}) => {
  return (
    <div className="month-template">
      <div className="month-header">
        <hr className="line" />
        <h3>{month}</h3>
        <hr className="line" />
      </div>
      <div className="month-content">
        {handlePrev && (
          <IoIosArrowDropleft className="icon-arrow-mp" onClick={handlePrev} />
        )}
        <img src={imgLeft} className="month-img" alt={`${month} left`} />
        <img src={imgCenter} className="month-img" alt={`${month} center`} />
        <img src={imgRight} className="month-img" alt={`${month} right`} />
        {handleNext && (
          <IoIosArrowDropright className="icon-arrow-mp" onClick={handleNext} />
        )}
      </div>
    </div>
  );
};

export default TripTemplete;
