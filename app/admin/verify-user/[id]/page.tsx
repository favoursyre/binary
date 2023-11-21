///This handles the verify user page

///Libraries -->
import VerifyUser from "@/components/verifyUser/VerifyUser"
import { IAccount } from "@/config/interfaces";
import { domainName } from "@/config/utils";
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Verify User',
  //description: `${companyName}'s Term of Use`
}

///This functionr retrieves an account
async function getAccount(id: string): Promise<IAccount> {
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

/**
 * @title Profile Page
 */
export default async function VerifyUserPage({ params: { id } }: { params: { id: string }}) {
  const account: IAccount = await getAccount(id)

  return (
    <main>
      <VerifyUser account_={account[0]}/>
    </main>
  )
}