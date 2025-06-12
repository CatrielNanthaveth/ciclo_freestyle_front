import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ciclo Freestyle",
  description: "Competencia de Freestyle en vivo - Ranking y perfiles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-background text-foreground font-sans">
        <nav className="w-3/4 mx-auto mt-6 bg-altern rounded-2xl text-details px-6 py-4 flex justify-between items-center shadow-md z-50">
          <h1 className="text-2xl tracking-wider drop-shadow-md">Ciclo Freestyle</h1>
          <div className="space-x-6 text-xl tracking-wide">
            <Link href="/" className="hover:underline hover:text-decorative">Inicio</Link>
            <Link href="/torneo" className="hover:underline hover:text-decorative">Torneo</Link>
            <Link href="/fechas" className="hover:underline hover:text-decorative">Fechas</Link>
          </div>
        </nav>
        <main className="pt-24 px-6">{children}</main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

        </footer>
      </body>
    </html>
  );
}
