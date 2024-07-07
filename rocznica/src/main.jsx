import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import HomePage from "../app/screens/HomePage";
import NavigationPage from "../app/screens/NavigationPage";
import SongsPage from "../app/screens/SongsPage";
import MoviesPage from "../app/screens/MoviesPage";
import MessagesPage from "../app/screens/MessagesPage";
import GalleryPage from "../app/screens/GalleryPage";
import MonthsPage from "../app/screens/MonthsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<NavigationPage />} />
        <Route path="/piosenki" element={<SongsPage />} />
        <Route path="/filmy" element={<MoviesPage />} />
        <Route path="/wiadomosci" element={<MessagesPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/miesiace" element={<MonthsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
