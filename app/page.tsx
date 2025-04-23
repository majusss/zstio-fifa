import { Hero } from "@/components/Hero";
import { Rules } from "@/components/Rules";
import { Sponsor } from "@/components/Sponsor";
import { Results } from "@/components/Results";
import { Equipment } from "@/components/Equipment";

const ruleSections = [
  {
    title: "§1. Postanowienia ogólne",
    paragraphs: [
      "1. Poniższy Regulamin Turnieju (w skrócie 'Regulamin') dotyczy rozgrywek 'Champions League Fifa 23' w ZSTiO Jarosław, który odbędzie się w dniach 30 kwietnia 2025 roku.",
      "2. Organizatorem turnieju jest szkoła ZSTIO Jarosław - opiekunami są nauczyciele Andrzej Ożyło i Przemysław Warecki.",
      "3. Każdy z uczestników Turnieju zobowiązany jest do zapoznania się z Regulaminem oraz jego przestrzegania. Przystąpienie do rozgrywek równoważne jest akceptacji postanowień Regulaminu.",
      "4. Udział w Turnieju jest otwarty i bezpłatny dla osób, które są uczniami szkół podstawowych.",
      "5. Warunkiem uczestnictwa jest wypełnienie formularza zgłoszeniowego.",
      "6. Maksymalna ilość uczestników to 32 osoby. W przypadku większej liczby chętnych przeprowadzone zostaną eliminacje.",
      "7. Turniej będzie odbywał się w godzinach 15:00-18:00 (harmonogram zostanie ustalony po zgłoszeniach).",
      "9. Organizatorzy nie ponoszą odpowiedzialności za zgubione, zniszczone lub skradzione rzeczy osobiste uczestników.",
      "10. Za złamanie Regulaminu grożą kary, które szczegółowo opisuje sekcja Regulaminu pt. 'Działania zabronione i kary'.",
      "11. Regulamin wchodzi w życie z dniem jego opublikowania.",
    ],
  },
  {
    title: "§2. System rozgrywek",
    paragraphs: [
      "1. W Turnieju udział biorą samodzielni gracze. Maksymalna ilość graczy to 32 osoby.",
      "2. Mecze rozgrywane są na PC, z padami od konsoli (pady oraz kabel we własnym zakresie).",
      "3. Turniej właściwy podzielony został na dwie fazy. Pierwsza faza to faza grupowa, natomiast druga to faza pucharowa. W fazie grupowej gracze zostaną podzieleni na 8 grup (4 graczy w każdej), z których do fazy pucharowej awansuje po 2 najlepszych graczy z każdej grupy. W fazie pucharowej zostaną rozegrane kolejno mecze 1/8 finału, ćwierćfinałowe, półfinałowe oraz finał.",
      "4. Za zwycięstwo w fazie grupowej gracz otrzymuje 3pkt, za remis 1pkt, za porażkę 0 pkt. W przypadku równej liczby punktów decydującym będzie wynik meczu bezpośredniego między graczami. W dalszej kolejności brana jest pod uwagę ilość zdobytych i straconych bramek.",
      "5. W systemie pucharowym obowiązuje zasada single ellimination - przegrywający odpada. W przypadku remisu obowiązuje klasyczna dogrywka, a jeśli ta nie przyniesie rozstrzygnięcia, to o awansie decydują rzuty karne.",
      "6. Losowanie miejsc w grupach, odbędzie się przed Turniejem.",
      "7. Mecz przerwany z przyczyn leżących po stronie Organizatora będzie bezzwłocznie powtórzony od stanu 0:0 z pełnym limitem czasu.",
    ],
  },
  {
    title: "§3. Rozgrywka meczowa",
    paragraphs: [
      "1. Wszystkie mecze rozgrywane są przy pomocy gry FIFA 23 (wersja PC).",
      "2. Mecze rozgrywamy poprzez mecz towarzyski, 32 najlepszymi drużynami w piłce nożnej w 2022 roku. Drużyny do rozlosowania będą następujące:",
      "Anglia: Liverpool, Chelsea, Manchaster City, Arsenal, Manchaster United, Tottenham Hotspur",
      "Francja: PSG, Olympique Marsyllia, Olympique Lyon, AS Monaco",
      "Hiszpania: Atletico Madrid, Barcelona, Real Madryt, Real Betis, Villareal CF, Athletic Bilbao",
      "Holandia: Ajax Amsterdam, PSV Eindhoven",
      "Niemcy: Bayern Munchen, Borussia Dortmund, Bayer Leverkusen, RB Leipzig",
      "Portugalia: Benfica, Sporting, FC Porto",
      "Turcja: Galatasaray",
      "Włochy: Inter Mediolan, AC Milan, Juventus, Napoli, Roma, Lazio",
      "3. Drużyny zostaną rozlosowane po zgłoszeniu wszystkich uczestników.",
      "4. Każdy uczestnik ma 60 sekund na dokonanie zmian w składach swoich zespołów.",
      "5. Jakiekolwiek przerwy w meczu są dozwolone wówczas, gdy gracz znajduje się przy piłce i jest na WŁASNEJ połowie.",
      "6. Organizatorzy zastrzegają sobie prawo do wyznaczenia godzin meczów, osoby nie stosujące się do nich mogą zostać usunięte z turnieju lub mecz może być zakończony wynikiem pozytywnym dla przeciwnika. Dopuszcza się maksymalnie 3 minuty spóźnienia.",
    ],
  },
  {
    title: "§4. Ustawienia gry",
    paragraphs: [
      "1. Ustawienia gry będą takie same w każdym meczu.",
      "2. Długość połowy: 4 minuty",
      "3. Poziom trudności: Klasa Światowa",
      "4. Szybkość gry: Normalna",
      "5. Kontuzje: Wł.",
      "6. Spalone: Wł.",
      "7. Kartki: Wł.",
      "8. Stadion: Dowolny",
      "9. Pogoda: Dobra",
      "10. Pora dnia: dzień/noc",
      "11. Liczba zmian: 3",
      "12. Sterowanie: Dowolne",
      "13. Kamera: Domyślna",
      "14. Zmiana ustawień gry przez graczy jest zabroniona",
    ],
  },
  {
    title: "§5. Działania zabronione i kary",
    paragraphs: [
      "Następujące działania będą uznawane za niesportową grę:",
      "a) Celowe wyłączenie komputera",
      "b) Niesportowe zachowanie, niewłaściwe, nieprofesjonalne działania skierowane przeciwko innemu graczowi",
      "c) Włączanie pauzy w grze w trakcie posiadania piłki przez rywala.",
      "d) Gra na czas poprzez zbyt długie podawanie w obronie na własnej połowie w celu utrzymania korzystnego wyniku.",
      "e) Oczywiste pozwolenie przeciwnikowi wygrania meczu.",
      "W przypadku wykrycia naruszenia jednego z punktów uznawanego za niesportową grę przez jakiegokolwiek gracza, oskarżony gracz według uznania Organizatorów może otrzymać ostrzeżenie, przegrać przez walkower lub zostać zdyskwalifikowany z turnieju. Podczas rozgrywek Turnieju Organizator może określić inne działania określające niesportową grę. Celem Organizatorów jest zorganizowanie turnieju na sprawiedliwych i równych dla wszystkich zasadach. Ostateczną decyzję w każdej sprawie podejmuje Organizator.",
    ],
  },
  {
    title: "§6. Postanowienia końcowe",
    paragraphs: [
      "Organizator rozgrywek zastrzega sobie prawo do dokonywania zmian w regulaminie. W takim przypadku odpowiednia informacja zostanie ogłoszona na turnieju. Turniej FIFA 23 nie jest powiązany ani sponsorowany przez Electronic Arts Inc. ani jej licencjodawców.",
    ],
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Equipment />
      <Results />
      <Rules sections={ruleSections} />
      <Sponsor />
    </main>
  );
}
