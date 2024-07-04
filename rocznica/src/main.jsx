import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, BrowserRouter, Route } from "react-router-dom";

import './index.css'
import HomePage from '../app/screens/HomePage'
import NavigationPage from '../app/screens/NavigationPage';
import SongsPage from '../app/screens/SongsPage';
import MoviesPage from '../app/screens/MoviesPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/menu" element={<NavigationPage/>} />
          <Route path='/piosenki' element={<SongsPage/>}/>
          <Route path='/filmy' element={<MoviesPage/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
