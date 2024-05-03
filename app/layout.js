import { Inter } from "next/font/google";
import "./globals.css";
import Conact from "./components/Conact";
import { Footer } from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Athlon By Aldar",
  description: "Athlon By Aldar residences dubai marina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16551601483"
          ></script>
          <script>
            dangerouslySetInnerHTML=
            {{
              __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16551601483');
     `,
            }}
          </script>
        </Head>
      </head>
      <Conact />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
