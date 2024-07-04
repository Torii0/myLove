import React from 'react';
import './SongsPage.css';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

const songs = [
  "https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/1OubIZ0ARYCUq5kceYUQiO?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/02JIdsrod3BYucThfUFDUX?utm_source=generator&theme=0",
  
  "https://open.spotify.com/embed/track/1JSTJqkT5qHq8MDJnJbRE1?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/6WK9dVrRABMkUXFLNlgWFh?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/0gAbf0NL9no1Urk1Wj8Uui?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/4EeW4hTPDEjy6lija1iF7R?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/0BgbobvykXxEvxo2HhCuvM?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/3U5JVgI2x4rDyHGObzJfNf?utm_source=generator&theme=0"
];

const SongsPage = () => {
  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title">
          <Title />
        </Link>
        <div className="song-grid">
          {songs.map((song, index) => (
            <iframe
              key={index}
              style={{ borderRadius: '12px' }}
              src={song}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongsPage;
