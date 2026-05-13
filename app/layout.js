import Navigation from "./components/Navigation/Navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
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
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
