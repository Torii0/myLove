import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import wiadomosci from "../assets/wiadomosci"; // Importuje wszystkie obrazy
import "./MessagesPage.css"; // Zaimportowanie pliku CSS
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
const MessagesPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleMessCount = 1;

  const handleNext = () => {
    if (startIndex + visibleMessCount < wiadomosci.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title">
          <Title />
        </Link>
        <div className="card-mess">
          <IoIosArrowDropleft className="icon-arrow-mp" onClick={handlePrev} />
          {wiadomosci
            .slice(startIndex, startIndex + visibleMessCount)
            .map((film, index) => (
              <img
                key={index}
                src={film}
                alt={`Movie ${startIndex + index + 1}`}
                className="gallery-image-mess"
              />
            ))}
          <IoIosArrowDropright className="icon-arrow-mp" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
