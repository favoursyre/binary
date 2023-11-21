///This handles our history page

///Libraries -->
import OurHistory from "@/components/ourHistory/OurHistory"
import { Metadata } from 'next'
import { companyName } from "@/config/utils"

///Commencing the code
export const metadata: Metadata = {
  title: 'Our History',
  description: `In the dynamic landscape of decentralized finance, our story begins with a shared vision among pioneers and innovators. ${companyName} was born from the convergence of technological brilliance and financial expertise. Founded in the heart of the digital revolution, we embarked on a journey to redefine the future of investments.
  With every challenge we&apos;ve overcomed and every innovation embraced, we have grown into a symbol of trust and excellence. We are not just witnesses to history; we are the architects, shaping the financial future one block at a time.`,
  alternates: {
    canonical: `/about-us/our-history`
  }
}
/**
 * @title Our history page
 */
export default function History() {
  return (
    <main>
      <OurHistory />
    </main>
  )
}