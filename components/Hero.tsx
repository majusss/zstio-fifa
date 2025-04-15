"use client";

import { Pencil, FileText, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

export function Hero() {
  return (
    <section className="z-10 md:mt-[25vh] flex w-full flex-col items-center justify-center px-5 xl:px-0">
      <Image
        src={zstioLogo}
        alt="zstio logo"
        className="md:fixed md:left-12 md:top-12 h-[128px] w-[128px] -z-10 max-md:mt-32 max-md:mb-12"
      />
      <h1
        className="animate-fade-up bg-gradient-to-bl to-stone-700 from-black gradient bg-clip-text text-transparent text-center font-display text-4xl font-extrabold tracking-[-0.02em] opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Weź udział w Champions League FIFA 23{" "}
        <br className="max-md:hidden" /> i walcz o zwycięstwo!
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Dołącz do Champions League FIFA 23 w ZSTiO i pokaż swoje umiejętności w
        rywalizacji z najlepszymi graczami ze szkół podstawowych!
      </p>
      <div
        className="mx-auto mt-3 flex animate-fade-up items-center justify-center space-x-2 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <Calendar className="h-5 w-5 text-gray-600" />
        <p className="text-center text-gray-600 font-semibold">
          30 kwietnia 2025, godz. 15:00
        </p>
      </div>
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
              <p className="text-nowrap">Zapisz sie</p>
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
                dla uczniów szkół podstawowych
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Zamknij</AlertDialogCancel>
              <AlertDialogAction
                onClick={() =>
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLSe7QbiCc4QxohhCT4Gx3J4K6M9dFamgSZg3zk4m9KaXhs2y8g/viewform?vc=0&c=0&w=1&flr=0")
                }
              >
                Formularz Zapisów
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          href="#regulamin"
        >
          <FileText />
          <p className="text-nowrap">Sprawdź regulamin</p>
        </a>
      </div>
    </section>
  );
}
