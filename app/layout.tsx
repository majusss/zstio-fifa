import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";

export const metadata = {
  title: "Champions League FIFA 23 - ZSTiO Jarosław - 23 maj 2025",
  description:
    "Dołącz do Champions League FIFA 23 w ZSTiO i pokaż swoje umiejętności w rywalizacji z najlepszymi graczami ze szkół podstawowych! Turniej odbędzie się 23 maja 2025 o godzinie 15:00.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-[100lvh] w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100" />

        {/* Dekoracyjne elementy w tle */}
        <div className="fixed w-full h-full overflow-hidden pointer-events-none">
          {/* Górny element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          {/* Dolny element */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-sky-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          {/* Środkowy element */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-400/10 to-blue-300/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden relative">
          {children}
        </main>
      </body>
    </html>
  );
}
