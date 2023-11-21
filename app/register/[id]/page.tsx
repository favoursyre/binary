///This handles the register page

///Libraries -->
import Register from "@/components/register/Register"
import { Metadata } from 'next'
import { Props } from "@/config/interfaces"

///Commencing the code

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Register',
    description: `Join our community of savvy investors and discover the seamless world of tokenized mutual funds. By creating an account with us, you're taking the first step towards secure, smart and sustainable investments.`,
    alternates: {
      canonical: `/register/${params.id}`
    }
  } as Metadata
}

/**
 * @title Register Page
 */
export default async function RegisterPage({ params: { id } }: { params: { id: string | undefined }}) {
  //await generateMetadata(id)
  //const contacts = await getContacts()
  //console.log("Id: ", id)

  return (
    <main>
      <Register id={id} />
    </main>
  )
}
