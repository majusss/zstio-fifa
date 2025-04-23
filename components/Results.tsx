"use client";

import { motion } from "motion/react";
import { Trophy, Medal, Gift, Award } from "lucide-react";
import Image from "next/image";
import poprzednia from "@/media/poprzednia.jpg";
import nagrody from "@/media/nagrody.jpg"; // Tutaj dodaj zdjęcie nagród
import Link from "next/link";

export function Results() {
  const winners = [
    {
      place: 2,
      name: "Cyprian Dec",
      school: "Szkoła Podstawowa nr 4 im. Stefana Żeromskiego w Jarosławiu",
      icon: <Medal className="h-10 w-10 text-gray-400" />,
      color: "from-gray-100 to-gray-200",
      borderColor: "border-gray-300",
      textColor: "text-gray-800",
    },
    {
      place: 1,
      name: "Piotr Tomaszewski",
      school: "Szkoła Podstawowa nr 1 im. św. Królowej Jadwigi w Jarosławiu",
      icon: <Trophy className="h-10 w-10 text-yellow-500" />,
      color: "from-yellow-100 to-yellow-200",
      borderColor: "border-yellow-300",
      textColor: "text-yellow-800",
    },
    {
      place: 3,
      name: "Tymoteusz Chrapek",
      school: "Szkoła Podstawowa nr 1 im. św. Królowej Jadwigi w Jarosławiu",
      icon: <Medal className="h-10 w-10 text-amber-600" />,
      color: "from-amber-100 to-amber-200",
      borderColor: "border-amber-300",
      textColor: "text-amber-800",
    },
  ];

  return (
    <section
      className="z-10 my-32 flex w-full flex-col items-center justify-center px-5 xl:px-0 overflow-x-hidden"
      id="wyniki"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-6xl px-3 pb-9">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          <motion.h1
            className="text-center font-display text-3xl font-extrabold tracking-[-0.02em] text-blue-900 drop-shadow-sm [text-wrap:balance] md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            Poprzednia Edycja
          </motion.h1>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>

        <motion.p
          className="text-center text-blue-700 font-medium mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          7 czerwca 2024 roku odbył się TURNIEJ World Cup FIFA dla uczniów 7 i 8
          klas szkół podstawowych pod honorowym patronatem Starosty
          Jarosławskiego Kamila Dziukiewicza.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12 place-items-end">
          {winners.map((winner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
                transition: { delay: 0 },
              }}
              animate={{
                height:
                  winner.place == 1
                    ? "105%"
                    : winner.place == 2
                      ? "95%"
                      : "90%",
              }}
              className="relative"
            >
              <div
                className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${winner.color} opacity-30 blur-lg`}
              ></div>
              <div className="relative bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl p-6 flex flex-col items-center text-center h-full border-2 border-t-4 border-l-0 border-r-0 border-b-0 rounded-bl-none rounded-br-none transition-all duration-200 ease-in-out">
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md ${winner.borderColor}`}
                >
                  {winner.icon}
                </div>

                <div className="mt-6 mb-4">
                  <h3 className={`text-xl font-bold ${winner.textColor} mb-1`}>
                    {winner.place}. {winner.name}
                  </h3>
                  <p className="text-sm text-gray-600">{winner.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nowa sekcja o nagrodach */}
        <motion.div
          className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg mb-10 border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-800">
                  Atrakcyjne nagrody
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                W tegorocznej edycji konkursu również czekają na Was atrakcyjne
                nagrody ufundowane przez naszych Patronów Honorowych i
                Sponsorów. Warto walczyć o pierwsze miejsce!
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div>
                  <Award className="h-5 w-5 text-amber-500" />
                </div>
                <p className="font-semibold text-amber-700">
                  Zwycięzcy poprzedniej edycji otrzymali wartościowe nagrody
                  technologiczne oraz upominki od sponsorów.
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-md">
              <Image
                src={nagrody}
                alt="Nagrody w turnieju FIFA"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <Link href="https://powiat.jaroslawski.pl/nowosci-oswiatowe/item/8984-turniej-world-cup-fifa-dla-uczniow-7-i-8-klas-szkol-podstawowych-w-zstio-w-jaroslawiu-rozstrzygniety?tmpl=component&print=1">
          <motion.div
            className="mt-8 bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl p-4 md:p-6 overflow-hidden w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={poprzednia}
                    alt="Uczestnicy turnieju FIFA 2024"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="flex flex-col justify-center">
                <motion.h3
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  className="text-xl md:text-2xl font-bold text-blue-800 mb-3"
                >
                  Organizatorzy turnieju
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="text-gray-700"
                >
                  Organizatorami turnieju byli nauczyciele Zespołu Szkół
                  Technicznych i Ogólnokształcących im. Stefana Banacha w
                  Jarosławiu: Andrzej Ożyło, Leszek Kobyliński oraz Przemysław
                  Warecki z katedry informatyki.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
                  className="text-gray-700 mt-3"
                >
                  Nagrody wręczyła Dyrektor Agata Ostrowska wraz z Andrzejem
                  Ożyło.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
