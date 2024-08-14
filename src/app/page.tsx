import Image from "next/image";
import Navbar from "./globalComponents/Navbar";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <div className="w-full bg-[#1f1f1f] min-h-[100svh]">
    <Navbar />
    <HomePage />
    <AboutUs />
    </div>
  );
}
