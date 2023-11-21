///This handles our comnpany page

///Libraries -->
import OurCompany from "@/components/ourCompany/OurCompany"
import { Metadata } from 'next'
import { companyName } from "@/config/utils"

///Commencing the code
export const metadata: Metadata = {
  title: 'Our Company',
  description: `${companyName} is one of the world&apos;s leading providers of investment, advisory and risk management solutions. We are a fiduciary to our clients. We're investing for the future on behalf of our clients, inspiring our employees and contributing to a more equitable and resilient world – today and for generations to come.`,
  alternates: {
    canonical: `/about-us/our-company`
  }
}

/**
 * @title Our Comapany page
 */
export default function Company() {
  return (
    <main>
      <OurCompany />
    </main>
  )
}