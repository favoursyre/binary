"use client"
///Header component

///Libraries -->
import styles from "./header.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { useState, MouseEvent, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Image from "next/image";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import { sleep, routeStyle, generateWallet } from "@/config/utils";


///Commencing the code 

/**
 * @title Header Component
 * @returns The Header component
 */
const Header = () => {
    const router = useRouter()
    const routerPath = usePathname()
    const [aboutBtn, setAboutBtn] = useState<Boolean>(false)
    const [accountBtn, setAccountBtn] = useState<Boolean>(false)
    const [menuBar, setMenuBar] = useState<Boolean>(false)
    const [aboutBar, setAboutBar] = useState<Boolean>(false)
    const [profileHovered, setProfileHovered] = useState(false);
    const [id, setId] = useState<number>(0)

    //console.log("Sender: ", process.env.NEXT_PUBLIC_SENDER_EMAIL)
    //console.log("Email: ", SUPPORT_EMAIL, SUPPORT_PASSWORD )

    ///updating dividends
    useEffect(() => {
        // Function to be executed every 24 hours
        const checkAndDoAction = () => {
          const currentDate = new Date();
          //console.log("Date: ", currentDate)
          const currentDay = currentDate.getDate();
          //console.log("Day: ", currentDay)
    
          // Check if the current date is the 3rd of the month
          if (currentDay === 3) {
            // Perform your action here
            console.log('It is the 3rd of the month! Perform your action.');
          }
        };

        const call = async () => {
            await generateWallet()
        }

        //call()
    
        // Call the function immediately
        checkAndDoAction();
    
        // Run the function every 24 hours (24 * 60 * 60 * 1000 milliseconds)
        const intervalId = setInterval(checkAndDoAction, 24 * 60 * 60 * 1000);
    
        // Clear the interval on component unmount to prevent memory leaks
        return () => {
          clearInterval(intervalId);
        };
      }, [])

  const handleMouseEnter = () => {
    setProfileHovered(true);
    // Additional actions when the component is hovered
  };

  const handleMouseLeave = () => {
    setProfileHovered(false);
    // Additional actions when the component is no longer hovered
  };
  //console.log('Current page:', routerPath);

  //This function is trigerred when the about button is clicked
  const clickAboutBtn = async (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, 
        mobileAbout: boolean, 
        mobileDropDown: boolean,
        link: string | void
    ) => {
    e.preventDefault()

    if (mobileAbout) {
        setAboutBar(() => !aboutBar)

        if (mobileDropDown && menuBar) {
            await sleep(400)
            setMenuBar(() => !menuBar)
        }
    } else {
        setAboutBtn(() => !aboutBtn)
    }

    if (link) {
        router.push(link)
    }
    
  }

  //This function is trigerred when the account button is clicked
  const clickAccountBtn = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, link: string | void) => {
    e.preventDefault()

    setAccountBtn(() => !accountBtn)

    if (link) {
        router.push(link)
    }
  }

  ///This function is trigerred when the menu icon is clicked
  const clickMenu = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, link: string | undefined) => {
    e.preventDefault()

    if (aboutBar) {
        setAboutBar(() => !aboutBar)
        await sleep(400)
    }
    setMenuBar(() => !menuBar)

    if (link) {
        router.push(link)
    }
  }

  return (
    <>
        <header className={`${styles.header} ${routeStyle(routerPath, styles)}`}>
            <button className={styles.menu} onClick={(e) => clickMenu(e, undefined)}>
                {menuBar ? (
                    <MenuOpenIcon className={styles.menuIcon}/>
                ) : (
                    <MenuIcon className={styles.menuIcon}/>
                )}
            </button>
            <div className={styles.logo} onClick={() => router.push('/')}>
                <Image 
                    className={styles.image}
                    src={"https://drive.google.com/uc?export=download&id=1THIPUBqHngps-OV2m-Jful5QIDTM-hvz"}
                    alt=""
                    width={2500}
                    height={2500}
                    //layout="responsive"
                />
            </div>
            <nav>
                <div className={styles.about}>
                    <button 
                        className={styles.aboutBtn}
                        onClick={(e) => clickAboutBtn(e, false, false)}
                    >
                        <span>About Us</span> 
                        <KeyboardArrowDownIcon className={aboutBtn ? styles.activeArrowIcon : styles.inactiveArrowIcon} />
                    </button>
                    <div className={styles.about_content} style={{ display: aboutBtn ? "flex" : "none"}}>
                        <button onClick={(e) => clickAboutBtn(e, false, false, "/about-us/our-company")}><span>Our Company</span></button>
                        <button onClick={(e) => clickAboutBtn(e, false, false, "/about-us/our-history")}><span>Our History</span></button>
                        <button onClick={(e) => clickAboutBtn(e, false, false, "/about-us/our-principles")}><span>Our Principles</span></button>
                        <button onClick={(e) => clickAboutBtn(e, false, false, "/about-us/our-leadership")}><span>Our Leadership</span></button>
                        {/* <button onClick={(e) => clickAboutBtn(e, false, false)}><span>Our Portfolio</span></button> */}
                        <button onClick={(e) => clickAboutBtn(e, false, false, "/about-us/our-foundation")}><span>Our Foundation</span></button>
                    </div>
                </div>
                {/* <button><span>About Us</span> <ArrowDropDownIcon /></button> */}
                <button className={styles.navBtn} onClick={() => router.push("/contact-us")}><span>Contact Us</span></button>
                <button className={styles.navBtn} onClick={() => router.push("/#testimonials")}><span>Testimonials</span></button>
                <button className={styles.navBtn} onClick={() => router.push("/faqs")}><span>FAQs</span></button>
                <button className={styles.navBtn} onClick={() => router.push("/dividends")}><span>Dividends</span></button>
            </nav>
            <div className={styles.account}>
                <button 
                    className={styles.profile}
                    onClick={(e) => clickAccountBtn(e)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ color: menuBar ? "black" : "white"}}
                >
                    <PersonIcon />
                    <KeyboardArrowDownIcon className={accountBtn ? styles.activeArrowIcon : styles.inactiveArrowIcon} />
                </button>
                <div className={styles.profileContent} style={{ display: accountBtn ? "flex" : "none"}}>
                    <button onClick={(e) => clickAccountBtn(e, "/login")}><span>Login</span></button>
                    <button onClick={(e) => clickAccountBtn(e, `/register/${id}`)}><span>Register</span></button>
                </div>
            </div>
        </header>
        <div className={menuBar ? styles.activeMenuBar : styles.inactiveMenuBar}>
            <div className={styles.topBar}></div>
            <div className={styles.navBar}>
                <button onClick={(e) => clickAboutBtn(e, true, false)}>
                    <span>About Us</span> 
                        <KeyboardArrowRightIcon className={aboutBar ? styles.activeArrowIcon : styles.inactiveArrowIcon} />
                </button>
                <button onClick={(e) => clickMenu(e, "/contact-us")}><span>Contact Us</span></button>
                <button onClick={(e) => clickMenu(e, "/#testimonials")}><span>Testimonials</span></button>
                <button onClick={(e) => clickMenu(e, "/faqs")}><span>FAQs</span></button>
                <button onClick={(e) => clickMenu(e, "/dividends")}><span>Dividends</span></button>
            </div>
        </div>
        <div className={aboutBar ? styles.activeAboutBar : styles.inactiveAboutBar}>
            <button onClick={(e) => clickAboutBtn(e, true, true, "/about-us/our-company")}><span>Our Company</span></button>
            <button onClick={(e) => clickAboutBtn(e, true, true, "/about-us/our-history")}><span>Our History</span></button>
            <button onClick={(e) => clickAboutBtn(e, true, true, "/about-us/our-principles")}><span>Our Principles</span></button>
            <button onClick={(e) => clickAboutBtn(e, true, true, "/about-us/our-leadership")}><span>Our Leadership</span></button>
            {/* <button onClick={(e) => clickAboutBtn(e, true, true)}><span>Our Portfolio</span></button> */}
            <button onClick={(e) => clickAboutBtn(e, true, true, "/about-us/our-foundation")}><span>Our Foundation</span></button>
        </div>
    </>
  );
};

export default Header;