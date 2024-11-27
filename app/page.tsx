"use client";

import { ChevronRight, Crown, FileText, Pencil } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import sponsor from "@/public/sponsor.jpg";
import zstio from "@/public/icon-512x512.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  const accordionData = [
    {
      title: "§1. Postanowienia ogólne",
      paragraphs: [
        "Poniższy Regulamin Turnieju (w skrócie „Regulamin”) dotyczy rozgrywek „Turnieju Mikołajkowego FIFA 23 w ZSTiO Jarosław”, który odbędzie się w dniach 5-6 grudnia 2024 roku.",
        "Organizatorem turnieju jest szkoła ZSTIO Jarosław – opiekunem i jednym z uczestników jest nauczyciel Przemysław Warecki.",
        "Każdy z uczestników Turnieju zobowiązany jest do zapoznania się z Regulaminem oraz jego przestrzegania. Przystąpienie do rozgrywek równoważne jest akceptacji postanowień Regulaminu.",
        "Udział w Turnieju jest otwarty i bezpłatny dla osób, które są uczniami ZSTiO.",
        "Warunkiem uczestnictwa jest wypełnienie formularza zgłoszeniowego lub zgłoszenie do opiekuna turnieju pana Przemysława Wareckiego.",
        "Maksymalna ilość uczestników to 32 osoby. Decyduje kolejność zapisów.",
        "Turniej będzie odbywał się w godzinach 15:00–18:00 (harmonogram zostanie ustalony po zgłoszeniach).",
        "Organizatorzy nie ponoszą odpowiedzialności za zgubione, zniszczone lub skradzione rzeczy osobiste uczestników.",
        "Za złamanie Regulaminu grożą kary, które szczegółowo opisuje sekcja Regulaminu pt. „Działania zabronione i kary”.",
        "Regulamin wchodzi w życie z dniem jego opublikowania.",
      ],
    },
    {
      title: "§2. System rozgrywek",
      paragraphs: [
        "W Turnieju udział biorą samodzielni gracze. Maksymalna ilość graczy to 32 osoby.",
        "Mecze rozgrywane są na PC, z padami od konsoli (pady we własnym zakresie).",
        "Turniej właściwy podzielony został na dwie fazy. Pierwsza faza to faza grupowa, natomiast druga to faza pucharowa. W fazie grupowej gracze zostaną podzieleni na 8 grup (4 graczy w każdej), z których do fazy pucharowej awansuje po 2 najlepszych graczy z każdej grupy. W fazie pucharowej zostaną rozegrane kolejno mecze 1/8 finału, ćwierćfinałowe, półfinałowe oraz finał.",
        "Za zwycięstwo w fazie grupowej gracz otrzymuje 3 pkt, za remis 1 pkt, za porażkę 0 pkt. W przypadku równej liczby punktów decydującym będzie wynik meczu bezpośredniego między graczami. W dalszej kolejności brana jest pod uwagę ilość zdobytych i straconych bramek.",
        "W systemie pucharowym obowiązuje zasada single elimination – przegrywający odpada. W przypadku remisu obowiązuje klasyczna dogrywka, a jeśli ta nie przyniesie rozstrzygnięcia, to o awansie decydują rzuty karne.",
        "Losowanie miejsc w grupach odbędzie się przed Turniejem.",
        "Mecz przerwany z przyczyn leżących po stronie Organizatora będzie bezzwłocznie powtórzony od stanu 0:0 z pełnym limitem czasu.",
      ],
    },
    {
      title: "§3. Rozgrywka meczowa",
      paragraphs: [
        "Wszystkie mecze rozgrywane są przy pomocy gry FIFA 23 (wersja PC).",
        "Mecze rozgrywamy poprzez mecz towarzyski, 32 drużynami Mistrzostwa Świata w piłce nożnej w 2022 roku.",
        "Drużyny zostaną rozlosowane po zgłoszeniu wszystkich uczestników, organizator zastrzega sobie wybór jednej z drużyn bez losowania.",
        "Każdy uczestnik ma 60 sekund na dokonanie zmian w składach swoich zespołów.",
        "Jakiekolwiek przerwy w meczu są dozwolone wówczas, gdy gracz znajduje się przy piłce i jest na WŁASNEJ połowie.",
        "Organizatorzy zastrzegają sobie prawo do wyznaczenia godzin meczów. Osoby niestosujące się do nich mogą zostać usunięte z turnieju lub mecz może być zakończony wynikiem pozytywnym dla przeciwnika. Dopuszcza się maksymalnie 3 minuty spóźnienia.",
      ],
    },
    {
      title: "§4. Ustawienia gry",
      paragraphs: [
        "Ustawienia gry będą takie same w każdym meczu.",
        "Długość połowy: 4 minuty.",
        "Poziom trudności: Klasa Światowa.",
        "Szybkość gry: Normalna.",
        "Kontuzje: Wł.",
        "Spalone: Wł.",
        "Kartki: Wł.",
        "Stadion: Dowolny.",
        "Pogoda: Dobra.",
        "Pora dnia: dzień/noc.",
        "Liczba zmian: 3.",
        "Sterowanie: Dowolne.",
        "Kamera: Domyślna.",
        "Zmiana ustawień gry przez graczy jest zabroniona.",
      ],
    },
    {
      title: "§5. Działania zabronione i kary",
      paragraphs: [
        "Następujące działania będą uznawane za niesportową grę:",
        "a) Celowe wyłączenie komputera.",
        "b) Niesportowe zachowanie, niewłaściwe, nieprofesjonalne działania skierowane przeciwko innemu graczowi.",
        "c) Włączanie pauzy w grze w trakcie posiadania piłki przez rywala.",
        "d) Gra na czas poprzez zbyt długie podawanie w obronie na własnej połowie w celu utrzymania korzystnego wyniku.",
        "e) Oczywiste pozwolenie przeciwnikowi wygrania meczu.",
        "W przypadku wykrycia naruszenia jednego z punktów uznawanego za niesportową grę przez jakiegokolwiek gracza, oskarżony gracz według uznania Organizatorów może otrzymać ostrzeżenie, przegrać przez walkower lub zostać zdyskwalifikowany z turnieju. Organizator może określić inne działania uznawane za niesportowe.",
      ],
    },
    {
      title: "§6. Postanowienia końcowe",
      paragraphs: [
        "Organizator rozgrywek zastrzega sobie prawo do dokonywania zmian w regulaminie. W takim przypadku odpowiednia informacja zostanie ogłoszona na turnieju.",
        "Turniej FIFA 23 nie jest powiązany ani sponsorowany przez Electronic Arts Inc. ani jej licencjodawców.",
      ],
    },
  ];

  return (
    <div className="grid">
      <Image
        src={zstio}
        alt="zstio logo"
        className="fixed left-12 top-12 h-[128px] w-[128px]"
      />
      <section className="z-10 flex h-[80vh] w-full flex-col items-center justify-center px-5 xl:px-0">
        <a
          rel="noreferrer"
          href="https://www.facebook.com/share/U4tLZ83KEm18K14d/?mibextid=WC7FNe"
          target="_blank"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-yellow-200 px-7 py-2 transition-colors hover:bg-yellow-200/80"
        >
          <Crown className="h-5 w-5 text-yellow-600" />
          <p className="text-sm font-semibold text-yellow-600">Druga Edycja</p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-stone-500 to-black bg-clip-text text-center font-display text-4xl font-extrabold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Weź udział w Turnieju FIFA 23 <br className="max-md:hidden" /> i walcz
          o zwycięstwo!
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Dołącz do Turnieju FIFA 23 w ZSTiO i pokaż swoje umiejętności w
          rywalizacji z najlepszymi graczami!
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <a
                className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                href="#"
              >
                <Pencil />
                <p>Zapisz sie</p>
              </a>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Zapisy</AlertDialogTitle>
                <AlertDialogDescription>
                  Zapisy{" "}
                  <Link
                    className="font-bold hover:underline"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe7QbiCc4QxohhCT4Gx3J4K6M9dFamgSZg3zk4m9KaXhs2y8g/viewform?vc=0&c=0&w=1&flr=0"
                  >
                    na tej stronie
                  </Link>{" "}
                  lub osobiście u Profesora Przemysława Wareckiego
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Zamknij</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() =>
                    window.open("https://plan.zstiojar.edu.pl/teacher/68")
                  }
                >
                  Sprawdź Plan
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="#"
          >
            <FileText />
            <p>Sprawdź regulamin</p>
          </a>
        </div>
      </section>
      <section className="z-10 flex w-full flex-col items-center justify-center px-5 xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="animate-fade-up text-center font-display text-3xl font-extrabold tracking-[-0.02em] text-black opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Nasz Sponsor - Sokołów S.A. <br className="max-md:hidden" />{" "}
            Tradycja od 1899
          </h1>
          <Image
            src={sponsor}
            alt="Logo sponsora"
            className="h-[200px] w-[200px] rounded-full"
          />
          <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Kabanosy dla każdego uczesnika turnieju
          </p>
        </div>
      </section>
      <section className="z-10 my-48 flex w-full flex-col items-center justify-center px-5 xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="animate-fade-up text-center font-display text-3xl font-extrabold tracking-[-0.02em] text-black text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Regulamin
          </h1>
          <Accordion
            type="single"
            className="w-full md:w-[50vw]"
            collapsible
            defaultValue={"" + 0}
          >
            {accordionData.map((ac, i) => (
              <>
                <AccordionItem value={"" + i}>
                  <AccordionTrigger className="!no-underline">
                    <p className="w-full animate-fade-up text-center font-display text-xl font-extrabold tracking-[-0.02em] text-black text-transparent drop-shadow-sm [text-wrap:balance] md:text-2xl md:leading-[5rem]">
                      {ac.title}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="flex justify-center">
                    <ul className="w-fit space-y-2">
                      {ac.paragraphs.map((pa, i) => (
                        <li key={i} className="flex flex-row">
                          <div>
                            <ChevronRight />
                          </div>
                          <p className="font-semibold">{pa}</p>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
