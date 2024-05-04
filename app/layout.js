import { Inter } from "next/font/google";
import "./globals.css";
import Conact from "./components/Conact";
import { Footer } from "./components/Footer";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

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
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16551601483"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16551601483');         `,
          }}
        />
        <Script>gtag('config', 'AW-16551601483');</Script> */}
      </head>
      <Conact />
      <GoogleAnalytics gaId="AW-16553376594" />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
