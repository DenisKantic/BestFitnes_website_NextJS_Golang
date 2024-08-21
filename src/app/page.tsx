import Image from "next/image";
import Navbar from "./globalComponents/Navbar";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import BenefitsFitness from "./BenefitsFitness";
import Advantages from "./Advantages";

export default function Home() {
  return (
    <div className="w-full  min-h-[100svh]">
    <Navbar />
    <HomePage />
    <AboutUs />
    <BenefitsFitness />
    <Advantages />
    </div>
    
  );
}
