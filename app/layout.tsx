import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";

export const metadata = {
  title: "FIFA 23 - ZSTiO Jarosław",
  description: "Dołącz do Turnieju FIFA 23 w ZSTiO i pokaż swoje umiejętności w rywalizacji z najlepszymi graczami!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-red-200" />
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
