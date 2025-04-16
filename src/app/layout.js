import { Geist, Geist_Mono, Aboreto, PT_Serif } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/ui/Header";
import Banner from "@/ui/Banner";
import Footer from "@/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: ["400"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Dra. Marizia Bonifácio",
  description: "Amor e Prazer juntos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aboreto.variable} ${ptSerif.variable}`}
      >
        <Header />
        <div style={{ paddingTop: "60px" }}>
          <Banner />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
