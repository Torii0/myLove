import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import './HomePage.css'; 
import photo from '../assets/samolot.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <div className="content">
          <img src={photo} height={110} className='imgLogo' alt="Logo" />
          <div className='text'>Razem przez <span className='text-span'>365</span> dni</div>
          <div className="hr-container">
            <hr className="hr-white" />
            <div className="text-i">B + W</div>
            <hr className="hr-white" />
          </div>
          <Link to="/menu"><IoIosArrowDropright className='icon-arrow'/></Link> 
        </div>
      </div>
    </div>
  );
};

export default HomePage;
