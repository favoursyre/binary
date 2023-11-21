///This handles our foundation page

///Libraries -->
import OurFoundation from "@/components/ourFoundation/OurFoundation"
import { Metadata } from 'next'
import { companyName } from "@/config/utils"

///Commencing the code
export const metadata: Metadata = {
  title: 'Our Foundation',
  description: `At ${companyName}, we are driven by a profound sense of responsibility to create positive ripples of change across the globe. Our commitment finds its expression through ${companyName} Foundation, the heart of our philanthropic endeavors. Rooted in the belief that businesses should be a force for good, our foundation has been instrumental in catalyzing transformative initiatives worldwide.
  
  Every investment made with us is not just a financial decision; it's a contribution to a brighter, more inclusive future. Join us in our journey of philanthropy and innovation, where each choice echoes with the promise of a better tomorrow for all.`,
  alternates: {
    canonical: `/about-us/our-foundation`
  }
}
/**
 * @title Our foundation page
 */
export default function Foundation() {
  return (
    <main>
      <OurFoundation />
    </main>
  )
}