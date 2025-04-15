import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface RuleSection {
  title: string;
  paragraphs: string[];
}

interface RulesProps {
  sections: RuleSection[];
}

export function Rules({ sections }: RulesProps) {
  return (
    <section className="z-10 my-48 flex w-full flex-col items-center justify-center px-5 xl:px-0">
      <div className="flex flex-col items-center justify-center">
        <h1
          id="regulamin"
          className="animate-fade-up text-center mb-12 font-display text-3xl font-extrabold tracking-[-0.02em] text-black opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
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
          {sections.map((section, i) => (
            <AccordionItem value={"" + i} key={i}>
              <AccordionTrigger className="!no-underline">
                <p className="w-full animate-fade-up text-center font-display text-xl font-extrabold tracking-[-0.02em] text-black drop-shadow-sm [text-wrap:balance] md:text-2xl md:leading-[5rem]">
                  {section.title}
                </p>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center">
                <ul className="w-fit space-y-2">
                  {section.paragraphs.map((paragraph, i) => (
                    <li key={i} className="font-semibold">
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
