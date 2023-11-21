///This handles the security page

///Libraries -->
import Security from "@/components/security/Security"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Security',
  description: `Your investments are guarded with state-of-the-art encryption and proactive measures. In the ever-evolving landscape of web3 finance, trust and security are our cornerstone.`,
  alternates: {
    canonical: `/security`
  }
}

/**
 * @title Security Page
 */
export default async function SecurityPage() {
  //const contacts = await getContacts()

  return (
    <main>
      <Security />
    </main>
  )
}
