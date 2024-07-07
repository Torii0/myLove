import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import filmy from "../assets/filmy"; // Importuje wszystkie obrazy
import "./MoviesPage.css"; // Zaimportowanie pliku CSS

const MoviesPage = () => {
  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title">
          <Title />
        </Link>
        <div className="card">
          {filmy.map((film, index) => (
            <img
              key={index}
              src={film}
              alt={`Movie ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
