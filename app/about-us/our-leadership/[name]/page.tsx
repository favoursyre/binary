///This handles the leadership info page

///Libraries -->
//import LeaderBio from "@/components/leaderBio/LeaderBio";
//import { getItemByKey,  toTitleCase } from "../../../../config/utils";
//import { ILeader } from "@/config/interfaces";

///Commencing the code
///This function gets the info of the leader
// async function getLeader(name: string) {
//     try {
//       const leader = getItemByKey(leaders, "name", name)
//       return leader[0];
//     } catch (error) {
//         console.error(error);
//     }
//   }

/**
 * @title Leadership info page
 */
export default async function LeaderByNamePage({ params: { name } }: { params: { name: string }}) {

  return (
    <main className="leader_info">
      {/* <LeaderBio leader={leader[0]} /> */}
      Nothing to see here
    </main>
  )
}