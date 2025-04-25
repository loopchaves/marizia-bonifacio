import { geistSans, geistMono, aboreto, ptSerif } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/ui/Header";
import Banner from "@/ui/Banner";
import Footer from "@/ui/Footer";
import "./globals.css";

// export const metadata = {
//   title: "Dra. Marizia Bonifácio",
//   description: "Amor e Prazer juntos!",
// };

export const metadata = {
  title: {
    default: 'Marizia Bonifacio - Amor e Prazer juntos',
    template: '%s | Marizia Bonifacio'
  },
  description: 'Descubra como alcançar mais prazer e satisfação em seus relacionamentos com os cursos e produtos da Marizia Bonifacio, especialista em sexualidade feminina.',
  keywords: ['pompoarismo', 'sexualidade feminina', 'prazer sexual', 'relacionamentos', 'autoconhecimento'],
  authors: [{ name: 'Marizia Bonifacio' }],
  creator: 'Marizia Bonifacio',
  publisher: 'Marizia Bonifacio',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://mariziabonifacio.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marizia Bonifacio - Especialista em Sexualidade Feminina',
    description: 'Descubra como alcançar mais prazer e satisfação em seus relacionamentos com os cursos e produtos da Marizia Bonifacio.',
    url: 'https://mariziabonifacio.com.br',
    siteName: 'Marizia Bonifacio',
    images: [
      {
        url: '/banner-6.jpg',
        width: 1920,
        height: 665,
        alt: 'Marizia Bonifacio - Especialista em Sexualidade Feminina',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marizia Bonifacio - Especialista em Sexualidade Feminina',
    description: 'Descubra como alcançar mais prazer e satisfação em seus relacionamentos com os cursos e produtos da Marizia Bonifacio.',
    images: ['/banner-6.jpg'],
    creator: '@mariziabonifacio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest', // TALVEZ
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
