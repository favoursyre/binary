///This handles the login page

///Libraries -->
import Login from "@/components/login/Login"
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Login',
  description: `Sign in to your account, Let's continue this remarkable journey together!`,
  alternates: {
    canonical: `/login`
  }
}

/**
 * @title Login Page
 */
export default async function LoginPage() {
  //const contacts = await getContacts()

  return (
    <main>
      <Login />
    </main>
  )
}
