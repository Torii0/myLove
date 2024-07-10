import React, { useState, useRef } from "react";
import "./Question.css";
import { Link } from "react-router-dom";
import NoButton from "./NoButton";

const Question = () => {
  return (
    <div className="page">
      <div className="overlay">
        <div className="question-container">
          <h3 className="question-text">
            Chcesz zostać moim chłopakiem i spędzić kolejne chwile razem?
          </h3>
        </div>
        <div className="button-container">
          <Link to="/tak" className="answer-button">
            <button>Tak</button>
          </Link>
          <NoButton />
        </div>
      </div>
    </div>
  );
};

export default Question;
