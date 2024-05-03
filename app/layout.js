import { Inter } from "next/font/google";
import "./globals.css";
import Conact from "./components/Conact";
import { Footer } from "./components/Footer";

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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16551601483"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16551601483');
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
gtag('event', 'conversion', { 'send_to': 'AW-16551601483/F949CJiOq6wZEMvKtdQ9', 'value': 10.0, 'currency': 'AED' });        `,
          }}
        />
      </head>
      <Conact />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
