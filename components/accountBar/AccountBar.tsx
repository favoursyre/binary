"use client"
///Account Bar component

///Libraries -->
import styles from "./accountBar.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName, yearCreated, routeStyle, sleep, accountIdKey } from "@/config/utils";
import { notify, removeItem } from "@/config/clientUtils";
import Image from "next/image";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useState, ChangeEvent, TouchEvent, MouseEvent, FormEvent, useEffect } from "react";
import { IAccount } from "@/config/interfaces";
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';

///Commencing the code 

/**
 * @title Account Bar Component
 * @returns The Account Bar component
 */
const AccountBar = ({ account_ }: { account_: IAccount }) => {
    const router = useRouter()
    const routerPath = usePathname();
    const [activeBar, setActiveBar] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [account, setAccount] = useState<IAccount>(account_)
    //console.log("Account: ", account)

    useEffect(() => {
      if (account === undefined) {
        notify("error", "Network error or probably this account doesn't exist. Reloading page in 5seconds")
        sleep(5000)
        window.location.reload()
      }

      //checkAndPayDividend()
    }, [account])

    ///This is triggered when user wants to view more details about a transaction
    const viewModalContent = (
      e: MouseEvent<SVGSVGElement, globalThis.MouseEvent> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
      e.preventDefault()

      setModal(() => !modal)
    }

    ///This is trigerred when the nav buttons is pressed
    const navButton = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, button: string) => {
      e.preventDefault()

      setActiveBar(() => !activeBar)
      await sleep(500)

      const id = account._id
      if (button === "dashboard") {
        router.push(`/account/dashboard/${id}`)
      } else if (button === "profile") {
        router.push(`/account/profile/${id}`)
      } else if (button === "logout") {
        setModal(() => !modal)
      }
    }

  return (
    <>
      <div className={`${activeBar ? styles.activeBar : styles.inActiveBar} ${routeStyle(routerPath, styles)}`}>
        <div className={styles.main}>
        <div className={styles.logo}>
            <Image 
                className={styles.image}
                src={"https://drive.google.com/uc?export=download&id=1THIPUBqHngps-OV2m-Jful5QIDTM-hvz"}
                alt=""
                width={2500}
                height={2500}
                //layout="responsive"
            />
            <span>{companyName}</span>
        </div>
        <div className={styles.profile}>
            <div className={styles.imageDiv}>
              {account && account?.profileImage && account?.profileImage?.url ? (
                <Image 
                  className={styles.image}
                  src={account?.profileImage?.url}
                  alt=""
                  width={account?.profileImage?.width}
                  height={account?.profileImage?.height}
                  //layout="responsive"
                />
              ) : (
                <PersonIcon className={styles.icon} />
              )}
                
            </div>
            <div className={styles.brief}>
                <span className={styles.brief1}>{account?.fullName}</span>
                <span className={styles.brief2}>{account?.emailAddress}</span>
            </div>
        </div>
        <div className={styles.nav}>
            <button className={styles.dashboard} onClick={(e) => navButton(e, "dashboard")}>
                <DashboardIcon className={styles.icon} />
                <span>Dashboard</span>
            </button>
            <button className={styles.profile} onClick={(e) => navButton(e, "profile")}>
                <PersonIcon className={styles.icon} />
                <span>Profile</span>
            </button>
        </div>
        <div className={styles.logout}>
            <button onClick={(e) => navButton(e, "logout")}>
                <LogoutIcon className={styles.icon} />
                <span>Logout</span>
            </button>
        </div>
        </div>
        <button onClick={() => setActiveBar(!activeBar)}><DragHandleIcon className={styles.drag}/></button>
      </div>
      <div className={`${modal ? styles.activeModal : styles.inActiveModal}`} >
        <div className={styles.container}>
          <CloseIcon className={styles.closeIcon} onClick={(e) => viewModalContent(e)} />
          <div className={styles.logoutContent}>
            <span>Are you sure you want to logout?</span>
            <div className={styles.buttons}>
              <button onClick={ async (e) => {
                notify("info", "Logging you out")
                await sleep(1000)
                removeItem(accountIdKey)
                router.push("/login")
                viewModalContent(e)
              }}>Yes</button>
              <button onClick={(e) => viewModalContent(e)}>No</button>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default AccountBar;