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
      </head>
      <Conact />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
