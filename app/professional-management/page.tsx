///This handles the professional managed assets page

///Libraries -->
import Professional from "@/components/professional/Professional"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Professional',
  description: `Our investments are entrusted to the hands of seasoned professionals and masters of the financial craft. With a blend of expertise and innovative risk management, our dedicated team curates investment strategies that stand the test of time.`,
    alternates: {
      canonical: `/professional-management`
    }
}

/**
 * @title Professional Page
 */
export default async function ProfessionalPage() {
  //const contacts = await getContacts()

  return (
    <main>
      <Professional />
    </main>
  )
}
