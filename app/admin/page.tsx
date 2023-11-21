///This handles the admin page

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
 * @title Admin Page
 */
export default async function AdminPage() {
  //const account = await getAccount(id)

  return (
    <main>
      <span>Nothing to see here!</span>
    </main>
  )
}