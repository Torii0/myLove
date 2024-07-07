import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./NavigationPage.css";

const buttons = [
  { label: "Piosenki", linkTo: "/piosenki" },
  { label: "Filmy", linkTo: "/filmy" },
  { label: "Wiadomości", linkTo: "/wiadomosci" },
  { label: "Galeria", className: "bg", linkTo: "/galeria" },
  { label: "Miesiące", className: "bg", linkTo: "/miesiace" },
  { label: "Wycieczki", className: "bg" },
  { label: "Jak się zaczęło?" },
  { label: "List" },
  { label: "Słoik" },
];

const NavigationPage = () => {
  return (
    <div className="page">
      <div className="overlay">
        <Link to="/" className="title">
          <Title />
        </Link>
        <div className="button-grid">
          {buttons.map((button, index) => (
            <Link to={button.linkTo}>
              <button
                key={index}
                className={`nav-button ${button.className || ""}`}
              >
                {button.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
