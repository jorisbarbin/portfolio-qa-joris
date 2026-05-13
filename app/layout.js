import Navigation from "./components/Navigation/Navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio QA - Joris Barbin",
  description: "Portfolio de Joris Barbin, futur testeur logiciel / QA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
