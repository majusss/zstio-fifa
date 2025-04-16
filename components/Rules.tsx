"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Trophy } from "lucide-react";
import { motion } from "motion/react";

interface RuleSection {
  title: string;
  paragraphs: string[];
}

interface RulesProps {
  sections: RuleSection[];
}

export function Rules({ sections }: RulesProps) {
  return (
    <section className="z-10 my-32 flex w-full flex-col items-center justify-center px-5 xl:px-0 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-3 pb-9">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          <motion.h1
            id="regulamin"
            className="text-center font-display text-3xl font-extrabold tracking-[-0.02em] text-blue-900 drop-shadow-sm [text-wrap:balance] md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            Regulamin Turnieju
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
          Zapoznaj się z zasadami turnieju Champions League FIFA 23.
          Uczestnictwo w turnieju oznacza akceptację poniższego regulaminu.
        </motion.p>

        <motion.div
          className="bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl p-4 md:p-6 w-full overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <Accordion
            type="single"
            className="w-full overflow-visible"
            collapsible
            defaultValue={"" + 0}
          >
            {sections.map((section, i) => (
              <AccordionItem
                value={"" + i}
                key={i}
                className="border-b border-blue-100 last:border-b-0 overflow-hidden"
              >
                <AccordionTrigger className="!no-underline py-4 md:py-5 px-3 md:px-4 rounded-lg transition-colors text-left overflow-hidden hover:bg-blue-50">
                  <div className="flex items-center gap-2 w-full overflow-hidden">
                    {i === 0 && (
                      <Trophy className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    )}
                    <motion.p
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="text-left font-display text-base font-bold tracking-[-0.01em] text-blue-900 md:text-xl overflow-hidden text-ellipsis"
                    >
                      {section.title}
                    </motion.p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-3 md:px-4 pt-3 md:pt-4 pb-5 md:pb-6 overflow-hidden">
                  <div className="w-full max-w-full break-words space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                    {section.paragraphs.map((paragraph, i) => {
                      if (
                        paragraph.startsWith("Anglia:") ||
                        paragraph.startsWith("Francja:") ||
                        paragraph.startsWith("Hiszpania:") ||
                        paragraph.startsWith("Holandia:") ||
                        paragraph.startsWith("Niemcy:") ||
                        paragraph.startsWith("Portugalia:") ||
                        paragraph.startsWith("Turcja:") ||
                        paragraph.startsWith("Włochy:")
                      ) {
                        const [country, teamsStr] = paragraph.split(": ");
                        return (
                          <div
                            key={i}
                            className="pl-3 md:pl-4 font-medium overflow-hidden text-wrap pr-2"
                          >
                            <span className="font-bold">{country}</span>:{" "}
                            <span>{teamsStr}</span>
                          </div>
                        );
                      } else if (
                        paragraph.startsWith("a)") ||
                        paragraph.startsWith("b)") ||
                        paragraph.startsWith("c)") ||
                        paragraph.startsWith("d)") ||
                        paragraph.startsWith("e)")
                      ) {
                        return (
                          <div
                            key={i}
                            className="pl-3 md:pl-4 font-medium overflow-hidden text-wrap pr-2"
                          >
                            {paragraph}
                          </div>
                        );
                      } else if (paragraph.startsWith("W przypadku wykrycia")) {
                        return (
                          <div
                            key={i}
                            className="mt-3 md:mt-4 font-medium overflow-hidden text-wrap pr-2"
                          >
                            {paragraph}
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={i}
                            className="font-medium overflow-hidden text-wrap pr-2"
                          >
                            {paragraph}
                          </div>
                        );
                      }
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
