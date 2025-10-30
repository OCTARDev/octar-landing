import React from "react";
import styles from "./style.module.css";
import Image from "next/image";


export default function Loader(){
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.loader}></div>
        <Image 
        src="/logo-blue.svg" 
        priority 
        width={1000} 
        height={1000} 
        className={styles["actual-image"]}  
        quality={100} alt="logo"
        />
      </div>
    </div>
  );
};

