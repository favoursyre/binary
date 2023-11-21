///This handles our leadership page

///Libraries -->
import OurLeadership from "@/components/ourLeadership/Leadership"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Our Leadership',
  description: `We proudly introduce the brilliant minds steering our ship, guiding us toward new horizons in the world of tokenized mutual funds; they are architects of financial evolution, each member bringing a wealth of experience, passion and foresight to redefine the investment paradigms. Explore their profiles and discover the driving force behind our commitment to excellence and your financial success.`,
  alternates: {
    canonical: `/about-us/our-leadership`
  }
}

/**
 * @title Our leadership page
 */
export default function Leadership() {
    return (
      <main>
        <OurLeadership />
      </main>
    )
  }