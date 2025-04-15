import { Hero } from "@/components/Hero";
import { Sponsor } from "@/components/Sponsor";
import { Rules } from "@/components/Rules";
import { rulesData } from "@/components/data/rules-data";

export default function Home() {
  return (
    <div className="grid">
      <Hero />
      <Sponsor />
      <Rules sections={rulesData} />
    </div>
  );
}
