import React, { useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./TripsPage.css";
import MonthTemplete from "../components/MonthTemplete";
import img1 from "../assets/galeria/1.jpg";
import img2 from "../assets/galeria/2.jpg";
const TripsPage = () => {
  const monthsData = [
    {
      month: "Wrocław",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod optio, nostrum consectetur harum in nobis eius voluptatum explicabo laboriosam, numquam vero qui vel inventore ipsa esse incidunt! Ab, autem?",
      imgLeft: img1,
      imgRight: img2,
    },
    {
      month: "Kraków",
      text: "Suspendisse potenti. Sed lectus est, bibendum in libero vel.",
      imgLeft: "path_to_image5.jpg",
      imgRight: "path_to_image6.jpg",
    },
    {
      month: "Park Bogucki",
      text: "Fusce auctor, nisl vel aliquam aliquam, nunc nisl suscipit odio.",
      imgLeft: "path_to_image7.jpg",
      imgRight: "path_to_image8.jpg",
    },
    {
      month: "Wycieczki rowerowe",
      text: "Maecenas vehicula erat et elit sodales, in facilisis urna accumsan.",
      imgLeft: "path_to_image9.jpg",
      imgRight: "path_to_image10.jpg",
    },
    {
      month: "Sosina i Malediwy",
      text: "Aenean nec erat ut neque commodo luctus sit amet non risus.",
      imgLeft: "path_to_image11.jpg",
      imgRight: "path_to_image12.jpg",
    },
    {
      month: "Witosa - twoja szkoła",
      text: "Nulla facilisi. Nulla nec magna condimentum, aliquet arcu vitae.",
      imgLeft: "path_to_image13.jpg",
      imgRight: "path_to_image14.jpg",
    },
    {
      month: "Rozmowy na kamerce",
      text: "Nulla facilisi. Nulla nec magna condimentum, aliquet arcu vitae.",
      imgLeft: "path_to_image13.jpg",
      imgRight: "path_to_image14.jpg",
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
