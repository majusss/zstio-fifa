"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import komputronikLogo from "../media/komputronik.png";
import jaroslawLogo from "../media/jaroslaw.png";
import powiatLogo from "../media/powiat.png";
import mondelezLogo from "../media/mondelez.png";

export function Sponsor() {
  const sponsors = [
    {
      name: "Starostwo Powiatowe w Jarosławiu",
      logo: powiatLogo,
    },
    {
      name: "Miasto i Gmina Jarosław",
      logo: jaroslawLogo,
    },
    {
      name: "Komputronik",
      logo: komputronikLogo,
    },
    {
      name: "Mondelez",
      logo: mondelezLogo,
    },
  ];

  return (
    <section className="z-10 mt-32 mb-32 flex w-full flex-col items-center justify-center px-5 xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center font-display text-3xl font-extrabold tracking-[-0.02em] text-blue-900 drop-shadow-sm [text-wrap:balance] md:text-5xl"
          >
            Nasi Patroni Honorowi i Sponsorzy
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -5px rgba(0, 0, 0, 0.01)",
                y: -5,
                transition: { delay: 0 },
              }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-200 to-blue-200 opacity-30 blur-xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl p-8 flex flex-col items-center text-center h-full">
                <div className="mb-4 w-full h-48 relative bg-white rounded-xl overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.name}`}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {sponsor.name}
                </h3>

                <div className="mt-auto inline-block rounded-full px-4 py-1 text-blue-700 text-xs font-semibold border border-blue-200 bg-blue-50">
                  {index < 2 ? "Patron honorowy" : "Partner turnieju"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
