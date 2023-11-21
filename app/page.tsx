///This handles the home page

///Libraries -->
import dynamic from "next/dynamic";
import Investor from "@/components/investor/Investor";
import Hero from "../components/hero/Hero";
import Stat from "../components/stat/Stat"
import Journey from "@/components/journey/Journey";
import Crypto from "@/components/payableCrypto/Crypto";
import WhyUs from "@/components/whyUs/WhyUS";
//import Testimony from "@/components/testimony/Testimony";
const Testimony = dynamic(() => import("@/components/testimony/Testimony"), { ssr: false })

///Commencing the code
/**
 * @title Homepage
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Stat />
      <Journey />
      <Crypto />
      <WhyUs />
      <Investor />
      <Testimony />
    </main>
  )
}
