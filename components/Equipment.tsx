"use client";

import { motion } from "motion/react";
import { Gamepad2, Cable, AlertTriangle, CheckCircle2 } from "lucide-react";

export function Equipment() {
  const items = [
    {
      title: "Kontroler/Pad",
      description:
        "Przynieś własny kontroler do rozgrywek. Obsługujemy pady PC oraz konsolowe (PS4/5 i Xbox).",
      icon: <Gamepad2 className="h-8 w-8 text-blue-500" />,
      color: "from-blue-50 to-blue-100",
      notes: "Obsługiwane są standardowe kontrolery kompatybilne z PC.",
    },
    {
      title: "Kabel USB",
      description:
        "Zabierz ze sobą odpowiedni kabel USB do Twojego pada (USB-A do USB-C, lub mikro USB).",
      icon: <Cable className="h-8 w-8 text-indigo-500" />,
      color: "from-indigo-50 to-indigo-100",
      notes: "Pamiętaj o sprawdzeniu typu złącza w Twoim kontrolerze.",
    },
  ];

  const tips = [
    "Przetestuj swój pad przed turniejem, aby upewnić się, że działa poprawnie",
    "Naładuj kontroler przed przyjściem na turniej",
    "Jeśli masz problemy z padem, zgłoś to organizatorom przed rozpoczęciem rozgrywek",
    "Sprawdź czy Twój kabel nie jest uszkodzony",
  ];

  return (
    <section
      className="z-10 my-32 flex w-full flex-col items-center justify-center px-5 xl:px-0"
      id="sprzet"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-3 pb-9">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          <motion.h1
            className="text-center font-display text-3xl font-extrabold tracking-[-0.02em] text-blue-900 drop-shadow-sm [text-wrap:balance] md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            Co zabrać ze sobą?
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
          Aby wziąć udział w turnieju, pamiętaj o przygotowaniu własnego sprzętu
          do gry
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -5px rgba(0, 0, 0, 0.01)",
              }}
              className="rounded-xl p-6 bg-gradient-to-br border border-gray-200 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full bg-gradient-to-br ${item.color}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <p className="text-gray-500 text-sm italic">{item.notes}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg border border-blue-100"
        >
          <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-100 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-500" />
            <h3 className="font-bold text-amber-700">Ważne wskazówki</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
