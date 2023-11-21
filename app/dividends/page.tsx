///This handles the dividends page

///Libraries -->
import Dividends from "../../components/dividend/Dividend"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Dividends',
  description: `Explore this page not just as a record of numbers but as a story of mutual triumphs. Every dividend paid echoes our dedication to our investor's prosperity. Thank you to all our investors for being part of our financial narrative. Together, we continue to redefine investment excellence.`,
  alternates: {
    canonical: `/dividends`
  }
}

/**
 * @title Contact Page
 */
export default async function DividendPage() {

  return (
    <main>
      <Dividends />
    </main>
  )
}
