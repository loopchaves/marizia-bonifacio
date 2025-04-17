import { geistSans, geistMono, aboreto, ptSerif } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/ui/Header";
import Banner from "@/ui/Banner";
import Footer from "@/ui/Footer";
import "./globals.css";

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
        <Analytics />
      </body>
    </html>
  );
}
