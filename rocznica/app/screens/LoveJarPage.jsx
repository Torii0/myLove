import React, { useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

import sloik from "../assets/sloik.png";
import serce from "../assets/serce.png";
import "./LoveJarPage.css";

const sentences = [
  "Kocham cię moje serduszko",
  "Kocham twój uśmiech. Jest uroczy :)",
  "Uwielbiam słuchać twojego głosu.",
  "Uwielbiam patrzeć się na Twoje przepiękne niebieskie oczka",
  "Kocham cię za to kim jesteś i nigdy się nie zmieniaj <3 ",
  "Podziwiam to jaki jesteś spokojny i że wpływasz na mnie tym w dobry sposób",
  "Kocham cię czyścioszku",
  "Kocham to kiedy miałam gorsze dni to zostwiałeś pod moimi drzwiami ciasto czy żelki albo przychodziłeś z kwiatkiem <3",
  "Cieszę się że wyciągasz mnie na dwór (jak nie będzie mi się chciało to i tak próbuj)",
  "Uwielbiam wspólnie gotować",
  "Kocham nasze wspólne wieczorki przy winku i muzyczce",
  "Kocham to jakim dobrym i bezinteresownych człowiekiem jesteś",
  "Uwielbiam twoje poczucie humoru",
  "Kocham cię bardzo mocno moja rybko dori",
  "Sprawiłeś że czuje się przy tobie najlepiej i najswobodniej. Wiem że mogę ci ufać",
  "Jesteś moim najlepsszym przyjacielem",
  "Dbasz o mnie jak najbardziej się da",
  "Kocham cię z całego mojego serca bartek",
  "Uwielbiam nasze rozmowy każdą z osobna, każda jest cenna",
  "Uśmiecham się strasznie jak rozmawiamy o wspólnej przyszłości razem",
  "Jestem wdzięczna że spotkałam ciebie i mogę być z tak cudownym chłopakiem",
  "Cieszę się że przekonujesz mnie do próbowania nowych rzeczy, wiele się przy tobie uczę",
  "Kocham cię kochanie <3",
];

const LoveJarPage = () => {
  const [selectedSentence, setSelectedSentence] = useState("");

  const handleJarClick = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setSelectedSentence(sentences[randomIndex]);
  };

  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title">
          <Title />
        </Link>

        <div className="love-jar-container">
          <img
            src={sloik}
            alt="sloik"
            className="sloik"
            onClick={handleJarClick}
          />
          <div className="serce-container">
            <img src={serce} alt="serce" className="serce" />
            <p className="sentence">{selectedSentence}</p>
          </div>
        </div>
        <h3 className="love-jar-text">Naciśnij na słoik kochanie 💗</h3>
      </div>
    </div>
  );
};

export default LoveJarPage;
