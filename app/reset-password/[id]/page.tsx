///This handles the reset password page

///Libraries -->
import ResetPassword from "@/components/resetPassword/Reset"
import { IAccount } from "@/config/interfaces";
import { domainName } from "@/config/utils";
import { Metadata } from 'next'
import { Props } from "@/config/interfaces"

///Commencing the code

///This functionr retrieves an account
async function getAccount(id: string): Promise<Array<IAccount>> {
  //const action: string = "get-account"
  try {
      const response = await fetch(`${domainName}/api/account/${id}?action=get-account`,
        {
          method: "GET",
          cache: "no-store",
        }
      );
      
        const account = await response.json();
        //console.log("Acc: ", account)
        return account;
  } catch (error) {
      console.error(error);
  }
}

///Declaring the metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const account = await getAccount(params.id)
  if (!account || account?.length === 0) {
    return {
      title: "Not found",
      description: "Page not found"
    }
  } else {
    return {
      title: 'Reset Password',
      description: `Hi ${account[0]?.fullName}, let's continue this remarkable journey together as you reset your password and regain access to your account.`,
      alternates: {
        canonical: `/reset-password/${params.id}`
      }
    }
  }
}

/**
 * @title Login Page
 */
export default async function ResetPasswordPage({ params: { id } }: { params: { id: string }}) {
  const account = await getAccount(id)

  return (
    <main>
      <ResetPassword account_={account[0]} />
    </main>
  )
}
