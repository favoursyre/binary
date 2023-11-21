///This handles the contact page

///Libraries -->
import Contact from "../../components/contact/Contact"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Whether you have questions, ideas or simply want to explore the innovative universe of web3 investments, our team is here to guide you. Reach out and let's help shape your financial future together.`,
  alternates: {
    canonical: `/contact-us`
  }
}

/**
 * @title Contact Page
 */
export default async function ContactPage() {

  return (
    <main>
      <Contact />
    </main>
  )
}
