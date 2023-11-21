///This handles the account page

///Libraries -->
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Account',
  //description: `${companyName}'s Term of Use`
  robots: {
    index: false,
    nocache: true
  }
}

/**
 * @title Account Page
 */
export default async function AccountPage() {
  //const account = await getAccount(id)

  return (
    <main>
      <span>Nothing to see here!</span>
    </main>
  )
}