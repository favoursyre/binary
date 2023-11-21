///This handles the terms of use page

///Libraries -->
import { companyName } from "@/config/utils";
import Terms from "../../components/terms/Terms";
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Terms',
  description: `Our Terms of Use are not just legalities; they are the cornerstones of a trusted partnership, a bridge connecting your aspirations to the vast potential of the digital financial landscape.`,
  alternates: {
    canonical: `/terms-of-use`
  }
}

/**
 * @title terns of use Page
 */
export default async function TermsPage() {
  //const contacts = await getContacts()

  return (
    <main>
      <Terms />
    </main>
  )
}
