import Image from "next/image";
import sponsorLogo from "../src/media/sponsor.png";

export function Sponsor() {
  return (
    <section className="z-10 mt-48 flex w-full flex-col items-center justify-center px-5 xl:px-0">
      <div className="flex flex-col items-center justify-center">
        <h1
          className="animate-fade-up text-center font-display text-3xl mb-12 font-extrabold tracking-[-0.02em] text-black opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Nasz Sponsor - Sokołów S.A. <br />
          Tradycja od 1899
        </h1>
        <Image
          src={sponsorLogo}
          alt="Logo sponsora"
          className="h-[200px] w-[200px]"
        />
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Kabanosy dla każdego uczesnika turnieju
        </p>
      </div>
    </section>
  );
}
