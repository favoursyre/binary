///This handles the compliance page

///Libraries -->
import Compliance from "@/components/compliance/Compliance"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Compliance',
  description: `In the digital realm of tokenized mutual funds, trust and security is paramount. Our AML and KYC Compliance isn't just a requirement; it's a testament to our dedication.`,
  alternates: {
    canonical: `/compliance`
  }
}

/**
 * @title Contact Page
 */
export default async function CompliancePage() {
  //const contacts = await getContacts()

  return (
    <main>
      <Compliance />
    </main>
  )
}
