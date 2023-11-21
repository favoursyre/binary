///This handles our principle page

///Libraries -->
import OurPrinciple from "@/components/ourPrinciple/OurPrinciple"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Our Principle',
  description: `Welcome to the heart of our philosophy. Our principles define who we are and how we serve you. These principles form the core of our ethos, shaping a trustworthy and progressive environment for our investors.
  Join us as we stand by these unwavering values, ensuring your financial aspirations find a home built on trust, sustainability and the power of the blockchain.`,
  alternates: {
    canonical: `/about-us/our-principle`
  }
}
/**
 * @title Our principle page
 */
export default function Principle() {
  return (
    <main>
      <OurPrinciple />
    </main>
  )
}