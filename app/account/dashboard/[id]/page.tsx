///This handles the dashboard page

///Libraries -->
import Dashboard from "@/components/dashboard/Dashboard"
import AccountBar from "@/components/accountBar/AccountBar"
import { IAccount } from "@/config/interfaces";
import { domainName } from "@/config/utils";
import { Metadata } from 'next'

///Commencing the code
export const metadata: Metadata = {
  title: 'Dashboard',
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
 * @title Dashboard Page
 */
export default async function DashboardPage({ params: { id } }: { params: { id: string }}) {
  const account = await getAccount(id)

  return (
    <main>
      {account === undefined ? (
        <div>No account was found, try reloading the page</div>
      ) : (
        <>
          <AccountBar account_={account[0]} />
          <Dashboard account_={account[0]} />
        </>
      )}
    </main>
  )
}