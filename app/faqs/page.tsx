///This handles the faqs page

///Libraries -->
import FAQs from "@/components/faqs/Faqs"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'FAQs',
  description: `Curiosity fuels growth and we understand that every investor's path is paved with questions. 
  Here, we unravel the complexities, demystify the jargon and provide clear, concise answers to your most pressing queries.
  Whether you're a seasoned investor or taking your first steps into the realm of decentralized finance, consider this your compass in the ever-evolving landscape of modern investments — let's navigate the world of financial possibilities together.`,
  alternates: {
    canonical: `/faqs`
  }
}

/**
 * @title Contact Page
 */
export default async function FAQsPage() {
  //const contacts = await getContacts()

  return (
    <main>
      <FAQs />
    </main>
  )
}
