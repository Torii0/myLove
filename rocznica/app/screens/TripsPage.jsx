import React, { useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./TripsPage.css";
import MonthTemplete from "../components/MonthTemplete";
import img1 from "../assets/wycieczki/wroclaw1.jpg";
import img2 from "../assets/wycieczki/wroclaw2.jpg";
import img3 from "../assets/wycieczki/krakow1.jpg";
import img4 from "../assets/wycieczki/krakow2.jpg";
import img5 from "../assets/wycieczki/park1.jpg";
import img6 from "../assets/wycieczki/park2.jpg";
import img7 from "../assets/wycieczki/rower1.jpg";
import img8 from "../assets/wycieczki/rower2.jpg";
import img9 from "../assets/wycieczki/sosina1.jpg";
import img10 from "../assets/wycieczki/sosina2.jpg";
import img11 from "../assets/wycieczki/witosa1.jpg";
import img12 from "../assets/wycieczki/witosa2.jpg";
import img13 from "../assets/wycieczki/dc1.png";
import img14 from "../assets/wycieczki/dc2.png";
const TripsPage = () => {
  const monthsData = [
    {
      month: "Wrocław",
      imgLeft: img1,
      imgRight: img2,
    },
    {
      month: "Kraków",
      imgLeft: img3,
      imgRight: img4,
    },
    {
      month: "Park Bogucki",
      imgLeft: img5,
      imgRight: img6,
    },
    {
      month: "Wycieczki rowerowe",
      imgLeft: img7,
      imgRight: img8,
    },
    {
      month: "Sosina i Malediwy",
      imgLeft: img9,
      imgRight: img10,
    },
    {
      month: "Witosa - twoja szkoła",
      imgLeft: img11,
      imgRight: img12,
    },
    {
      month: "Rozmowy na kamerce",
      imgLeft: img13,
      imgRight: img14,
    },
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handleNext = () => {
    if (currentMonthIndex < monthsData.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    } else {
      setCurrentMonthIndex(0); // Go to the first month if currently at the last month
    }
  };

  const handlePrev = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    } else {
      setCurrentMonthIndex(monthsData.length - 1); // Go to the last month if currently at the first month
    }
  };

  const currentMonth = monthsData[currentMonthIndex];
  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title">
          <Title />
        </Link>
        <MonthTemplete
          month={currentMonth.month}
          text={currentMonth.text}
          imgLeft={currentMonth.imgLeft}
          imgRight={currentMonth.imgRight}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default TripsPage;
