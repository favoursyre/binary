"use client"
///Loading component

///Libraries -->
import styles from "./circle.module.scss"

///Commencing the code 

/**
 * @title Loading Component
 * @returns The Loading component
 */
const Loading = () => {
  //console.log('Current page:', routerPath);

  return (
    <div className={styles.main}>
        <div className={styles.circle}></div>
    </div>
  );
};

export default Loading;