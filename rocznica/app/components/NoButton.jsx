import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  padding: 20px 100px;
  font-size: 26px;
  cursor: pointer;
  transition: transform 0.3s ease-out;
  background-color: red;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

const getRandomPosition = () => ({
  left: `${Math.random() * 80}vw`, // losowa pozycja od lewej strony
  top: `${Math.random() * 80}vh`, // losowa pozycja od góry strony
});

const NoButton = () => {
  const [position, setPosition] = useState({ left: "50vw", top: "57.5vh" });

  const handleClick = () => {
    setPosition(getRandomPosition());
  };

  return (
    <Button
      style={{ left: position.left, top: position.top }}
      onClick={handleClick}
    >
      Nie
    </Button>
  );
};

export default NoButton;
