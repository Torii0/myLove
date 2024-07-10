import React, { useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./StartDatingPage.css";
import img1 from "../assets/galeria/1.jpg";
import img2 from "../assets/galeria/2.jpg";
const StartDatingPage = () => {
  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title-sdp">
          <Title />
        </Link>
        <div className="text-with-lines">
          <h3>Jak zaczęła się nasza podróż?</h3>
        </div>
        <div className="map-and-text">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.4984995440823!2d19.03550451244033!3d50.263950100655705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce32fe5d35bf%3A0x538695142633f000!2sPark%20Bogucki!5e0!3m2!1spl!2spl!4v1720377885983!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="description">
            <h5 className="letter-sd">
              <div class="letter">
                8 lipca zaczal się bardzo dobrze bo zaproponowałeś wspólne
                spotkanie u ciebie, żebym mogła zobaczyć jak wygląda twoje
                mieszkanie zanim się przeprowadzisz. Odprowadziłeś m ie do domu
                gdzie byłam w szoku i zaczęłam coś tak sobie myśleć że może
                jednak mnie lubisz. Zaczęliśmy wchodzić w coraz glebsze i
                poważniejsze rozmowy, i dawałeś nie coraz więcej znaków.
                Najlepsza była zwykła ławka w parku kolo mnie. Usiedliśmy się
                tam. Rozmowa była na tyle napięta że po paru minutach była paro
                minutową przerwa I po prostu patrzeliśmy na drzewo na przeciwko.
                Jak już odprowadzałem mnie pod dom to strasznie przyspieszyło mi
                serce a wyskoczyko mi ze szczęścia kiedy powiedziałeś że mnie
                lubisz. Odpowiedziałam tym samym chociaż zajęło mi to bardzo
                bardzo długo żeby przyswoić sobie taką informację. Na pożegnanie
                się przytuliliśmy, chociaż z mojej winy nie potrwało to za
                długo:( Wróciłam potem do domu i dosłownie skakałam z radości I
                z uśmiechem na twarzy zasypiałam.
              </div>
            </h5>
          </div>
        </div>
        <div className="img-and-text">
          <img src={img1} alt="Left" />
          <h5 className="letter-sd">
            <div class="letter">
              9 lipca było wyjście grupowe do kościoła więc nie mieliśmy jak ze
              sobą wtedy porozmawiać. Miałam na nie nie iść, a kiedy poszłam na
              nie to poczekałem na mnie na peronie i razem przyjechaliśmy i
              dołączyliśmy się do grupy, trzymaliśmy się też blisko siebie a
              wracając pytałeś się co uważam na temat związku i czy myślisz czy
              my możemy być razem. Powiedziałeś na sam koniec że przyjdziesz
              kolejnego dnia żeby porozmawiać na poważnie. <br /> <br />
              10 lipca spotkaliśmy się na chwilę znowu na ten samej ławce i
              uznaliśmy że chcemy razem być oficjalnie. Może było niezręcznie
              ale ja to wspominam cudownie.
              <br /> <br />
              Oficjalnie zaczęła się wtedy nasza podróż ale tak naprawdę zaczela
              się znacznie wcześniej. Wtedy kiedy ja tobie się spodobałam oraz
              wtedy kiedy ty mi się spodobałeś. Każde takie malutkie znaki ode
              mnie czy od ciebie były już początkiem podróży, które zaprowadziły
              nas do tego dnia. Do naszej pierwszej rocznicy ❤<br />
            </div>
          </h5>
          <img src={img2} alt="Right" />
        </div>
        <div className="important-question">
          <h3>Mam do ciebie bardzo ważne pytanie</h3>
          <Link to="/pytanie" className="question-button">
            Zobacz jakie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartDatingPage;
