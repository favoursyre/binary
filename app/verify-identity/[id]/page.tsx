///This handles the verification page

///Libraries -->
import Verification from "@/components/verifyIdentity/Verification"
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

//Declaring the metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const account = await getAccount(params.id)
  if (!account || account?.length === 0) {
    return {
      title: "Not found",
      description: "Page not found"
    }
  } else {
    return {
      title: 'ID Verification',
      description: `Hi ${account[0]?.fullName}, let's verify your identity and embark on a prosperous financial future together.`,
      alternates: {
        canonical: `/verify-identity/${params.id}`
      }
    }
  }
}

/**
 * @title Register Page
 */
export default async function VerificationPage({ params: { id } }: { params: { id: string }}) {
  //console.log("ID client: ", id)
  const account = await getAccount(id)
  //console.log("acco: ", account)

  return (
    <main>
      <Verification account_={account[0]}/>
    </main>
  )
}
