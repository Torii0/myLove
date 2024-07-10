import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./LetterPage.css";

const LetterPage = () => {
  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title-lp">
          <Title />
        </Link>
        <div className="letter">
          <p>Cześć kochanie,</p>
          <p>
            Dzisiaj mija dokładnie rok, odkąd jesteśmy razem. Czuje się jakbyśmy
            byli ze sobą dłużej, ale z drugiej strony minął już rok. Czuje się
            przy Tobie naprawdę najszczęśliwsza. Odciągasz mnie od każdych złych
            dni i myśli, nawet kiedy nie ma ciebie obok to myślę sobie, że za
            niedługo się z tobą spotkam i będzie po prostu dobrze. Jesteś moim
            bezpiecznym miejscem. Mogę się tobie zwierzyć wiedząc ze mnie nie
            ocenisz, porozmawiać o poważnych sprawach i powygłupiać się.
            Przeszliśmy razem przez naprawdę wiele sytuacji. Pocieszałeś mnie i
            byłeś po prostu obok kiedy mówiłam jak ciężko jest mi momentami,
            podnosiłeś mnie wiele razy na duchu. Zdążały się też sprzeczki,
            gdzie naprawdę dobrze z nimi sobie poradziliśmy. Wiem, że głównie
            dzięki tobie, bo jest spokojny a ja się kłócę częściej, ale staram
            się analizować sytuacje i byc tez spokojna. Będę na pewno dalej się
            tego uczyć. Przez kolejne miesiące czułam się z Tobą coraz bardziej
            zżyta. Nie wyobrażam sobie już dnia bez ani jednej wiadomości od
            ciebie. Myślę o tobie codziennie. W najdrobniejszych codziennych
            sytuacjach myślę sobie jak miło by było zrobić to z tobą. Robiąc
            cały ten prezent chciałam nie raz żebyś był obok mnie i wytłumaczył
            mi co nie działa, ale to miała być niespodzianka więc nie mogłam.
            Cieszę się jak mamy okazje wspólnie pogotować, posprzątać, spać
            razem. Dosłownie drobne codzienne rzeczy, które stają się lepsze o
            niebo, kiedy jesteś obok. <br /> <br />
            Dziękuje ci za ten rok z całego mojego serca. Spędziliśmy mnóstwo
            cudownego czasu razem. Pierwsze spontaniczne nocowania na
            Tysiącleciu i Jaworznie, szkoła stawała się lepszym miejscem, bo
            chodzimy razem do klasy wiec mogłam cię częściej widzieć, to jak
            razem szliśmy do szkoły i jak mnie odprowadzałeś do domu, każde
            wyjście do parku i pójście do naszej ławeczce, wszystkie wycieczki
            Wrocław, Kraków, wycieczki rowerowe, Sosina, Malediwy, spotkanie
            twojej rodziny, to wszystko i wiele więcej dla mnie bardzo dużo
            znaczy. I to są naprawdę przepiękne wspomnienia, a są dzięki tobie.
            Dziękuje ze pomimo wcześniejszych sytuacji z propozycja związku nie
            przestałeś mnie lubić i po kryjomu i tak dawałeś mi znaki. Przykro
            mi z jednej strony ze musiałeś przez to przejść, ale cieszę się też
            w jakim miejscu jesteśmy dzisiaj. Dziękuje, że mimo wszystko się nie
            poddałeś i tez chciałeś spróbować ze mną związku. <br /> <br />
            Nie myślałam, że można się w kimś tak mocno zakochać i być w tak
            szczęśliwym i poważnym związku będąc w tak młodym wieku. I
            chciałabym zobaczyć nas razem w przyszłości. Chciałam ci w tym
            liście przekazać, że nie ważne co nas spotka zawsze będę cię kochać,
            a rok to tylko początek naszej drogi, która będzie mam nadzieje
            bardzo długa. <br /> <br />
          </p>
          <p>
            Wszystkiego najlepszego w drugim roku mój cudowny chłopaku.
            <br />
            Kocham cię każdego dnia coraz bardziej kochanie
          </p>
          <p>Twoja Wiktoria ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
