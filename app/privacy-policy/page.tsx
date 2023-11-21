///This handles the privacy policy page

///Libraries -->
import PrivacyPolicy from "@/components/privacyPolicy/Privacy"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Privacy',
  description: `Your privacy is not just a policy; it's a sacred trust. In this interconnected digital universe, trust is the cornerstone upon which meaningful relationships are built. As you explore our platform for tokenized mutual funds, rest assured that your data is not just protected but honored.`,
  alternates: {
    canonical: `/privacy-policy`
  }
}

/**
 * @title Contact Page
 */
export default async function PrivacyPage() {
  //const contacts = await getContacts()

  return (
    <main>
      <PrivacyPolicy />
    </main>
  )
}
