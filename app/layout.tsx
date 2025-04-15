import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";

export const metadata = {
  title: "Champions League FIFA 23 - ZSTiO Jarosław - 30 kwietnia 2025",
  description:
    "Dołącz do Champions League FIFA 23 w ZSTiO i pokaż swoje umiejętności w rywalizacji z najlepszymi graczami ze szkół podstawowych! Turniej odbędzie się 30 kwietnia 2025 o godzinie 15:00.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-[100lvh] w-full bg-gradient-to-br from-indigo-50 via-white to-red-200" />
        <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
