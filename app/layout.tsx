///Layout page

///Libraries -->
import Header from '@/components/header/Header';
import Footer from "@/components/footer/Footer";
import { companyName } from '../config/utils';
import type { Metadata } from 'next'
import styles from "./layout.module.scss"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EdgeStoreProvider } from '@/config/edgestore';

///Commencing the code

///Declaring the metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_NAME), 
  title: {
    default: `${companyName}`,
    template: `%s | ${companyName}`
  },
  icons: {
    icon: 'favicon.ico',
  },
  description: `Embark on a revolutionary financial journey with ${companyName}. Explore our avant-garde platform for tokenized mutual funds,where traditional mutual funds meet the power of blockchain. Unlock new possibilities in wealth creation and financial freedom. Join us in reshaping the landscape of modern finance – your gateway to a smarter, more secure future.`,
  keywords: "investment, token, cryptocurrency, tokenized mutual funds, mutual funds, web3, finance, business, stocks, tokenized stocks"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles.html} style={{ scrollBehavior:'smooth' }}>
      <body>
        <ToastContainer autoClose={5000} limit={5} newestOnTop={true} />
        <Header />
        <main>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </main>
        <Footer />
        </body>
    </html>
  )
}
