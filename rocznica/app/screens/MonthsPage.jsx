import React, { useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./MonthsPage.css";
import MonthTemplete from "../components/MonthTemplete";
import img1 from "../assets/miesiace/lipiec1.jpg";
import img2 from "../assets/miesiace/lipiec2.jpg";
import img3 from "../assets/miesiace/sierpien1.jpg";
import img4 from "../assets/miesiace/sierpien2.jpg";
import img5 from "../assets/miesiace/wrzesien1.jpg";
import img6 from "../assets/miesiace/wrzesien2.jpg";
import img7 from "../assets/miesiace/pazdziernik1.jpg";
import img8 from "../assets/miesiace/pazdziernik2.jpg";
import img9 from "../assets/miesiace/listopad1.jpg";
import img10 from "../assets/miesiace/listopad2.jpg";
import img11 from "../assets/miesiace/grudzien1.jpg";
import img12 from "../assets/miesiace/grudzien2.jpg";
import img13 from "../assets/miesiace/styczen1.jpg";
import img14 from "../assets/miesiace/styczen2.jpg";
import img15 from "../assets/miesiace/luty1.jpg";
import img16 from "../assets/miesiace/luty2.jpg";
import img17 from "../assets/miesiace/marzec1.jpg";
import img18 from "../assets/miesiace/marzec2.jpg";
import img19 from "../assets/miesiace/kwiecien1.jpg";
import img20 from "../assets/miesiace/kwiecien2.jpg";
import img21 from "../assets/miesiace/maj1.jpg";
import img22 from "../assets/miesiace/maj2.jpg";
import img23 from "../assets/miesiace/czerwiec1.jpg";
import img24 from "../assets/miesiace/czerwiec2.jpg";

const MonthsPage = () => {
  const monthsData = [
    {
      month: "Lipiec",
      text: "Cudowny miesiąc, a szczególnie ten 10 lipca. Strasznie się ucieszyłam, że mogliśmy spędzić czas tylko we dwójkę i porozmawiać sobie swobodnie. Dodam, że byłam w ogromnym szoku jak mnie zaprosiłeś, a pod koniec dnia to już byłam całkowicie zszokowana, szczęśliwa, zestresowana i po prostu wszystkie emocje na raz. Długo zajęło mi przyswojenie tej wiadomości, bo mówisz ze aż 5min byłam cicho. Może byłam w takim szoku albo pomysłami ze to jest niemożliwe i nie wiedziałam co się dzieje. Ale koniec końców skończyło się szczęśliwie.  A teraz jesteśmy już razem rok. Lipiec wspominam dobrze jak całe wakacje, bo spędzałam je z moja pierwszą miłością. Wtedy tak naprawdę się poznawaliśmy, było jeszcze niezręcznie i przez pierwsze tygodnie nie wiedziałam co mam robić. Ale jak sobie wracam do tego to to był przyjemny i cenny czas. Pierwszy pocałunek, nocowanie i randka na filmie biedronka i czarny kot. Uwielbiam sobie to wspominać. Niestety nie mamy zdjęć wspólnych z tamtego czasu :( ",
      imgLeft: img1,
      imgRight: img2,
    },
    {
      month: "Sierpień",
      text: "1 sierpnia był dzień dziewczyny nawet nie wiesz, jak byłam zszokowana, że przyszedłeś i przyniosłeś mi bukiet. To było bardzo miłe zaskocznie. Dalej się poznawaliśmy, coraz więcej spędzaliśmy razem czasu, a najbardziej wspominam wyjazdy do Jaworzna najczęściej spontanicznie. Dalej pamiętam jak by to było wczoraj jak po wyjściu do pizzerii uznałeś ze w sumie możemy jechać do Jaworzna a przy okazji spotkam twoich rodziców. Wyszło spontanicznie i faktycznie to było fajne a pierwsze spotkanie z twoimi rodzicami było na pewno ciekawe. Z samego Jaworzna najbardziej wspominam grę w pytania przy winku i włoskiej muzyczce. To miało swój naprawdę cudowny klimat. Teraz też możemy posłuchać wspólnie muzyki i napić się czegoś, ale wtedy ten klimacik był inny przez wspólne poznawanie się i pierwsze nasze kroki ku związkowi 😊Dostałam od ciebie wtedy też bransoletkę z napisem Wiktoria. Pierwsza rzecz jaką dostałam od ciebie.   ",
      imgLeft: img3,
      imgRight: img4,
    },
    {
      month: "Wrzesień",
      text: `Urodziny Soli były tutaj przełomowe. Zaczęłam na pewno czuć się bardzo komfortowo przy tobie. Na urodzinach zatańczyliśmy pierwszy taniec, mieliśmy tak naprawdę pierwsze nasze wspólne zdjęcia i czułam się przy tobie dobrze i swobodnie a była też duża grupa ludzi, a wiem ze wcześniej było mi z tym ciężej. Nawet jak już musiałeś pójść z imprezy to zaraz potem i tak pisaliśmy ze sobą. Urocze. W następnym tygodniu września jechaliśmy na wycieczkę do Wrocławia. Nawet nie wiem, jak opisać jakie to było cudowne, bo mimo że byliśmy w grupie to dla mnie to byl bardzo romantyczny wyjazd. Pamiętam, jak szliśmy przy moście dla zakochanych i mowilam ze szkoda ze nie mamy kłódek. Poszedłeś z rana, kiedy wszyscy spali i kupiłeś te kłódki, potem poszliśmy, zapisaliśmy na nich nasze inicjały, zaczepiliśmy do mostu i wyrzuciliśmy kluczyk do rzeki. To były dosłownie 2 miesiące, ale czułam się pewnie, że już kocham cię mocno ponad wszystko i ze ta kłódka jest tego symbolem. Teraz mija rok i kocham cię z kolejnym dniem, z kolejnymi słodkimi gestami, żartami, rozmowami, słowami wsparcia coraz mocniej. I mam nadzieje ze ta kłódka pozostanie naszym symbolem miłości. Dobrze wspominam jeszcze jak zostawiliśmy Piankę i Sole samych a my przy okazji sami spędziliśmy czas. Wieczorkiem pospacerowaliśmy chwile po Wrocławiu i zatrzymaliśmy się na moście. Dookoła było przepięknie i był cudowny klimacik. Teraz jeszcze sobie przypomniałam ze pocałowaliśmy się a jadłam bagietkę czosnkowa, to było duże poświecenie. Jak sobie wracam ogólnie do września to jestem szczęśliwa, że już wtedy wiedziałam jaki to będzie bardzo ważny związek oraz to, że staniesz się dla mnie osobą ważną od której dostane ogrom miłości wsparcia i przyjaźni<3 `,
      imgLeft: img5,
      imgRight: img6,
    },
    {
      month: "Październik",
      text: "Jeśli chodzi o październik to nie pamiętam za dużo. Głównie pamiętam te największe wydarzenia i w tym momencie pluje sobie w brodę, że nie zapisuje sobie co zrobiliśmy razem nawet mniejsze rzeczy, bo one są tak samo ważne. Głównie to pamiętam, jak byliśmy na urodzinach Pająka i mieliśmy tam prze kozacką sesje zdjęciową starym aparatem. Zdjęcia wyszły mega a pamiętam ze świetnie się z tobą bawiłam przy ich robieniu. Jednak co najbardziej mi zapadło mi w pamięci to, kiedy poczułam się okropnie po rozmowach z grupą a ty to zauważyłeś. Wyszłaś wtedy ze mną na dwór i siedzieliśmy sobie na bujanej ławeczce co najmniej 30min. Wiedziałeś, że potrzebowałam odejść od ludzi i wtedy chciałam posiedzieć z tobą sam na sam i się do ciebie przytulic. Bardzo mnie to uspokoiło. Przypomniała mi się jeszcze jedna sytuacja. Dzień przed urodzinami Pająka, byłam wkurzona na ciebie o coś, ale tego już dokładnie nie pamiętam i po tym jak napisałam ze stało mi się przykro przyjechałeś do mnie z maczkiem, niestety przemoczonym od deszczu. Spotkaliśmy się na przystanku, poszliśmy na klatkę schodowa, żeby spałaszować tego Maka. Ucieszyło mnie ze wziąłeś tez mój ulubiony sos. To było naprawdę urocze, mimo że było już późno i ciemno to przyjechałeś się tylko ze mną spotkać. Ostatnią rzeczą, o której chciałabym powiedzieć są to moje urodziny. Były dla mnie ogromnie ważne i nie tylko ze względu ze to była 18 ze będę mieć imprezę urodzinowa i inne błahostki, ale to ze spędziłam je z najwspanialszymi ludźmi a jednym z nich byleś ty. Dzień przed nimi spędziliśmy całkowicie razem, poszliśmy do Silesii i tak w większości to siedzieliśmy przy fast foodach bo się najedliśmy i mieliśmy bardzo długa sjesta. Poszliśmy spacerkiem do mojego domu i mimo że to był zwykły dzień to wypełniała mnie ogromna radość. A po północy z Sola zrobiliście mi cudowna niespodziankę <3 ",
      imgLeft: img7,
      imgRight: img8,
    },
    {
      month: "Listopad",
      text: "W listopadzie dobrze pamiętam swoje urodziny, ale te imprezowe już. Szczerze dalej uważam ze te urodziny były nie wypałem, ale były w miarę spokojne. Kulturalne picie, obejrzenie filmu (wole sobie nie przypomnieć jakiego xD), i spacerek, żeby odprowadzić Claudie, a Wojtek rozmawiał o związkach, naszym też. Miło, że urodziny spędziłam przy twoim boku, dodawałeś mi takiego spokoju. W listopadzie byłam też u ciebie na praktykach, czyli często do ciebie przychodziłam, a nawet pojechaliśmy na wycieczkę do Krakowa. Podobało mi się jak jechaliśmy autem, jak sobie spacerowaliśmy przy Wiśle i zjedliśmy sobie tam śniadanko na ławeczce, zobaczyliśmy Wawel, rynek i inne zakamarki Krakowa. Najlepsze było, jak chciałam się napić, ale wszystko było tam okropnie drogie wiec poszliśmy do żabki kupiliśmy dwusetkę cytrynówki i wlaliśmy ja do coli z Maka XD Jest tanio jest, jest dobrze, jest tanio.  A jeszcze lepsze było pójście za darmo do muzeum w takim stanie. Od razu było weselej. Wracaliśmy też spacerkiem wzdłuż Wisły jednak było już ciemno. Rozmawialiśmy a dookoła był przepiękne niebo. Poznałam wtedy twoja siostrę i pograliśmy sobie nawet w gierki. To była najlepsza wycieczka i randka, na której byłam. Chciałabym ją bardzo powtórzyć <3 ",
      imgLeft: img9,
      imgRight: img10,
    },
    {
      month: "Grudzień",
      text: "Pamiętam ze tego 1 grudnia poszliśmy sobie zjeść drwala i sobie posiedzieć. Kocham takie momenty. Tydzień później były urodziny Wojtka na których po północy wybijała nasza kolejna miesięcznica. O północy poszliśmy sobie na bok, żeby pobyć chwile razem, a przed wyjściem zatańczyliśmy jeszcze do Every Breath You Take. Na samym początku urodzin byliśmy też odebrać Sole i Piankę a czekając na nich pochodziliśmy sobie po jarmarku świątecznym Sosnowca i dużo się przy tym pośmialiśmy. Na święta pojechałam do babci i dziadka więc przyszedłeś do mnie jeszcze przed wyjazdem, żeby dac mi najcudowniejszy prezent 😊 Robię sama prezenty i dla mnie najlepsze prezenty są własnoręczne prosto z serduszka i taki właśnie wtedy dostałam. Obrazek jest po prostu przeuroczy a list kochany <3.  I przyszedł czas na sylwester, ostatni dzień 2023. Byłam wtedy wdzięczna ze byleś przy mnie w zeszłym roku i miałam nadzieje ze dalej będziesz w przyszłym. Cieszę się, że spędziliśmy spokojnie sylwestra u ciebie. <3  ",
      imgLeft: img11,
      imgRight: img12,
    },
    {
      month: "Styczeń",
      text: "W tym miesiącu nie było mnie w Polsce myślę ze półtorej tygodnia, może nawet dwa. Tego samego dnia, kiedy wróciłam jeszcze się spotkaliśmy i wyszliśmy na dwór, gdzie było mnóstwo śniegu. Poszliśmy pod NOSPR i zrobiliśmy sobie orzełki na śniegu. Cieszyłam się, że cię w końcu mogłam zobaczyć. Zaprosiłeś mnie też na taką pierwsza oficjalna randkę (ale wiem ze każde wyjście z tobą to randka <3). Poszliśmy do PasiBurgera a kiedy czekaliśmy na jedzenie zastanawialiśmy się jak działają pesele. Zrobiliśmy sobie zdjęcia przy gwiazdce przy galerii i poszliśmy do cymbergaja wypić grzańca i pograć w eksplodujące kotki oraz w tego krokodylka śmiesznego. Przychodziłeś wcześnie do mnie, żeby pójść razem do szkoły nawet jak było na 7 rano. I mnie odprowadzałeś nawet jeśli musiałeś na mnie zaczekać. Zima to ogólnie był taki spokojny i miły czas :) ",
      imgLeft: img13,
      imgRight: img14,
    },
    {
      month: "Luty",
      text: "Na przełomie stycznia i lutego był nasz ekipowy karnawał. Pamiętam jak po całej imprezie byłam wkurzona, że inni nic nie zrobili. Ty natomiast próbowałeś mi wytłumaczyć, żeby się o to nie wkurzań i jeśli możesz coś więcej zrobić to możesz i proponowałeś nawet ze sam zajmiesz się naczyniami a ja mogę sobie usiąść. Oczywiście nie chciałam, żeby tak było, bo ogarnialiśmy to wspólnie tak jak wiele innych rzeczy. Na początku lutego musiałam znowu jechać do Niemiec, ale tylko na parę dni. Jak wróciłam to spędziliśmy sobie mnóstwo czasu razem. Wtedy też zaczęliśmy grac w it takes two 😊 Dziękuję, że na mnie czekałeś zawsze jak nie umiałam przejść jednej rzeczy i zajmowało mi to dużo czasu <3 Wspólnie gotowaliśmy, oglądaliśmy filmy i tak naprawdę zobaczyłam pierwszy raz jak by to było zamieszkać razem:) Bardzo cenie sobie wtedy ten czas, kiedy mogliśmy być tylko we dwójkę. Wtedy były też walentynki i dostałam od ciebie bukiet róż oznaczających kocham cię oraz malutki własnoręcznie zrobiony mini wersja bukieciku. Powiedziałeś ze kwiaty kiedyś zwiędną a bukiecik zostanie. I miałeś poniekąd racje, ale płatki róż mam dalej przy sobie <3 ",
      imgLeft: img15,
      imgRight: img16,
    },
    {
      month: "Marzec",
      text: "W marcu często chyba przychodziłam do ciebie. Bo zaczęłam wtedy prace z twoją mamą. Więc mogliśmy się częściej widzieć 😊 Pamiętam też, że któregoś dnia miałam okres i gorzej się czułam to na poprawę kupiłeś mi kinder joya i pamiętam ze nie raz kupowałeś mi też maczka. To jest bardzo kochane <3. W marcu największym takim wyjściem była chyba wycieczka do twojej podstawówki. Samo dojście tam było ciekawe, bo z naszej szkoły do podstawówki na Witosa szliśmy nawet bardzo blisko drogi. Na Witosa okazało się, że nie ma tam nic do jedzenia więc myknęliśmy szybko na tysiąclecie i wróciliśmy. Miło było zobaczyć, gdzie dorastałeś, gdzie sobie chodziłeś jak byłeś młodszy. Najbardziej byłam uśmiechnięta, kiedy po prostu pokazywałeś mi sale, piętra, tłumaczyłeś, jak szkoła działa, mówiłeś mi o różnych sytuacjach. Po prostu cieszyłam się ze mogłam się o tobie jeszcze więcej dowiedzieć <3 ",
      imgLeft: img17,
      imgRight: img18,
    },
    {
      month: "Kwiecień",
      text: "W kwietniu znalazłam w końcu na TikToku tego pana, który do nas podszedł kiedyś w wakacje i przeczytał nam wiersz o miłości. <3 Niestety, ale w kwietniu też jechałam do Niemiec i rozmawialiśmy na discordzie przez kamerkę. Mimo że jesteśmy wtedy daleko od siebie to dobrze wspominam to jak po prostu ze sobą rozmawiamy, gramy i oglądamy filmy. Doceniam wtedy też każdą minutę z tobą. Pod koniec kwietnia wróciłam i wyszliśmy do Silesii oraz do parku i zagraliśmy w warcaby z kwiatowymi pionkami, w chińczyka też udało się zagrać 😊 Ostatniego kwietnia było w szkole świętowanie z okazji 3 maja wiec oboje się ładnie ubraliśmy i po szkole poszliśmy sobie do parku. Rozłożyliśmy kocyk i pograliśmy w blokusa. Oczywiście przegrywałam, ale jeszcze kiedyś pokonam mistrza <3 ",
      imgLeft: img19,
      imgRight: img20,
    },
    {
      month: "Maj",
      text: "Majówkę tak naprawdę całą spędziłam razem z tobą. Grill z twoją rodziną i myślę, że wtedy zaczęliśmy coraz więcej jeździć na rowerze. Udało ci się mnie przekonać do jazdy, mimo że było ciężko na początku. Dzięki temu możemy sobie teraz jeździć na wycieczki rowerowe i spędzić aktywnie razem czas. Dziękuje ze mnie tego nauczyłeś i wyciągasz mnie na świeże powietrze. Zaczynały się też cieplejsze dni i mieliśmy pójść na jacht grupa. Niestety nie udało się, ale Wojtek zaprosił nas do siebie. I myślę ze to był i tak dobrze spędzony czas razem. Graliśmy wtedy w badmintona i to jak najostrzej się da. Tak samo wykorzystywaliśmy czas, kiedy była w szkole religia. Szliśmy do parku i graliśmy w badmintona. Wtedy strasznie się uśmiałam. Pod koniec maja mieliśmy również okazje pobycia razem u mnie. Zagraliśmy wtedy w bardzo ciekawą wersje gwinta. 😉   ",
      imgLeft: img21,
      imgRight: img22,
    },
    {
      month: "Czerwiec",
      text: "1 czerwca zaczynaliśmy z przytupem, bo były twoje urodziny. Starałam się bardzo nad prezentem, bo chciałam, żeby ci się przydał w razie złego humoru albo kiedy nie biedzimy się widzieć. Pojeździliśmy sobie trochę na rowerkach, zjedliśmy pizzę zrobioną przez twojego tatę i ten dzień spędziliśmy po prostu razem. Myślę, że to jest najważniejsze. Czerwiec był również czasem egzaminów. Wspólnie uczyliśmy się na teorie i pomagałeś mi w nauce do praktyki. Przed praktyka chciałam żebyśmy wyszli i spędzili razem czas a ze było ciepło to sama zaproponowałam basen. I myślę, że t był strzał w dziesiątkę, bo pomogłeś mi też z pływaniem <3 Na samym końcu szybciutko obskoczyliśmy primarka gdzie założyłeś za małe spodnie, bo nie znałam do końca twojego rozmiaru (przepraszam za to, ale było śmiesznie) i wyszliśmy na samo zamkniecie galerii. To była odskocznia od całego stresu z egzaminem i pomogłeś mi w tym. Po prostu byciem blisko. Tak samo jak wyszłam z sali nie zadowolona z tego jak napisałam egzamin. Mogłam się do ciebie przytulić i to dawało mi ulgę i spokój. Dostaje od ciebie naprawdę ogrom wsparcia kochanie. Po egzaminie przyjechałam do ciebie trochę poświętować. Pojechaliśmy wtedy na Sosine i posiedzieliśmy nad woda, a później zabraliśmy się w wycieczkę rowerową do polskich Malediwów. Strasznie mi się tam podobało i ciesz się ze mieliśmy okazje tam pojechać jeszcze raz razem z Claudia. Cała wycieczka była przecudowna i z chęcią bym ją powtórzyła. Po powrocie byliśmy sami, a ze byliśmy głodni no to spróbowaliśmy zrobić naleśniki. Niestety nie wyszło jak byśmy chcieli a w sumie to w ogóle. Udało się jedynie zrobić jeden malutki naleśnik, z którego i tak byłyśmy bardzo dumni. Po nie udanej próbie nie zostało nic jak się tylko napić winka. Wtedy się mocno odpaliłam, ale to był najlepszy stan. Czułam się rozluźniona i mogłam mówić jak bardzo mocno cię kocham <3 ",
      imgLeft: img23,
      imgRight: img24,
    },
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handleNext = () => {
    if (currentMonthIndex < monthsData.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    } else {
      setCurrentMonthIndex(0); // Go to the first month if currently at the last month
    }
  };

  const handlePrev = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    } else {
      setCurrentMonthIndex(monthsData.length - 1); // Go to the last month if currently at the first month
    }
  };

  const currentMonth = monthsData[currentMonthIndex];

  return (
    <div className="page">
      <div className="overlay">
        <Link to="/menu" className="title">
          <Title />
        </Link>
        <MonthTemplete
          month={currentMonth.month}
          text={currentMonth.text}
          imgLeft={currentMonth.imgLeft}
          imgRight={currentMonth.imgRight}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default MonthsPage;
