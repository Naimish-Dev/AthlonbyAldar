"use client";
import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Hero } from "./components/Hero";
import Amenities from "./components/Amenities";
import Location from "./components/Location";
import Overview from "./components/Overview";
import { PaymentPlan } from "./components/PaymentPlan";

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    };

    const handleClick = () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <main>
      <div className="cursor"></div>
      <Hero />
      <Amenities />
      <Overview />
      <PaymentPlan />
      <Location />
    </main>
  );
}
