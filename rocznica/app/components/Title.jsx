import React from 'react';
import './Title.css';
import photo from '../assets/samolot.png';

const Title = () => {
  return (
    <div className="content-np">
      <img src={photo} height={50} className='imgLogo-np' alt="Logo" />
      <div className='text-np'>
        Razem przez <span className='text-span-np'>365</span> dni
        <div className="hr-container-np">
        <hr className="hr-white-np" />
        <div className="text-i-np">B + W</div>
        <hr className="hr-white-np" />
      </div>
      </div>
    
    </div>
  );
}

export default Title;
