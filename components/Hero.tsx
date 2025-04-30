"use client";

import { Pencil, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
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
import zstioLogo from "../media/zstio-logo.png";

function ActionDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.01, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border-0 bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm text-white hover:shadow-md hover:from-blue-500 hover:to-indigo-500"
        >
          <Pencil className="h-5 w-5" />
          <span className="text-nowrap font-bold">Zapisz się teraz</span>
        </motion.button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-blue-100">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-blue-800">
            Zapisy na turniej
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600">
            Zapisy{" "}
            <Link
              className="font-bold text-blue-600 hover:underline"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe7QbiCc4QxohhCT4Gx3J4K6M9dFamgSZg3zk4m9KaXhs2y8g/viewform?vc=0&c=0&w=1&flr=0"
            >
              na tej stronie
            </Link>{" "}
            dla uczniów szkół podstawowych
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-full">
            Zamknij
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSe7QbiCc4QxohhCT4Gx3J4K6M9dFamgSZg3zk4m9KaXhs2y8g/viewform?vc=0&c=0&w=1&flr=0",
              )
            }
            className="rounded-full bg-blue-600 hover:bg-blue-700"
          >
            Formularz Zapisów
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 3, easing: "ease-in-out" }}
        className="absolute w-full md:w-[70%] h-[500px] bg-gradient-to-br from-blue-600/20 via-indigo-400/10 to-transparent rounded-full blur-3xl top-0 left-1/2 transform -translate-x-1/2 -z-10"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            <motion.h1
              className="text-center font-display text-3xl font-extrabold tracking-[-0.02em] text-blue-900 drop-shadow-sm [text-wrap:balance] md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            >
              Uwaga zmiana daty!
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
            Zapraszamy 23 maja 2025 na turniej FIFA 23 w ZSTiO Jarosław!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.1, duration: 0.5, easing: "ease-out" }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center space-x-2"
          >
            <Image src={zstioLogo} alt="ZSTiO Logo" width={64} height={64} />

            <motion.p
              whileHover={{ x: 2, color: "#1e40af" }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium uppercase tracking-widest text-blue-600"
            >
              ZSTIO JAROSŁAW
            </motion.p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{
              scale: 1.01,
              textShadow: "0 0 8px rgba(59, 130, 246, 0.3)",
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, easing: "ease-out" }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-br from-blue-700 to-indigo-800 bg-clip-text text-transparent pb-3"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-animation 6s ease infinite",
            }}
          >
            Champions League Fifa 23
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01, color: "#4b5563" }}
            transition={{ delay: 0.3, duration: 0.5, easing: "ease-out" }}
            className="max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400"
          >
            Weź udział w najbardziej prestiżowym turnieju FIFA 23 w naszej
            szkole. Zmierz się z najlepszymi i zdobądź tytuł mistrzowski!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, easing: "ease-out" }}
            className="flex flex-col md:flex-row items-center gap-4 mt-6"
          >
            <ActionDialog />

            <motion.div
              whileHover={{ scale: 1.03, color: "#2563eb" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 text-blue-600 font-medium"
            >
              <Trophy className="h-8 w-8 text-blue-600" />
              <p>23 maj 2025 • 15:00</p>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-5 left-5 w-24 h-24 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                whileHover={{
                  opacity: 0.8,
                  scale: 1.2,
                  backgroundColor: "#3b82f6",
                }}
                transition={{
                  delay: 0.05 * i,
                  duration: 0.3,
                  easing: "ease-out",
                }}
                className="w-2 h-2 rounded-full bg-blue-500"
              ></motion.div>
            ))}
          </div>

          <motion.div
            className="absolute top-20 right-10 hidden md:block"
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rotate-45 border-2 border-blue-200 rounded-lg opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
