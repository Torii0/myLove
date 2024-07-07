import React from "react";
import "./MonthTemplete.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const MonthTemplete = ({
  month,
  text,
  imgLeft,
  imgRight,
  handleNext,
  handlePrev,
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
        <img src={imgLeft} className="month-img" alt="" />
        <h5 className="month-text">{text}</h5>
        <img src={imgRight} className="month-img" alt="" />
        {handleNext && (
          <IoIosArrowDropright className="icon-arrow-mp" onClick={handleNext} />
        )}
      </div>
    </div>
  );
};

export default MonthTemplete;
