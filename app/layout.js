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
  title: {
    default: "Portfolio QA - Joris Barbin",
    template: "%s | Portfolio QA - Joris Barbin",
  },
  description:
    "Portfolio de Joris Barbin, futur testeur logiciel / QA, présentant ses projets, sa formation et ses compétences en test logiciel, JavaScript, React et Next.js.",
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
