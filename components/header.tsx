import { FC } from "react";
import Image from "next/image";
import picPlaceholder from "../public/userIcon.jpg"
import styles from "../styles/Header.module.css"

interface fieldProps {
    User: string,
    Description: string,
    url: string
}


export const Header : FC<fieldProps> = ({User,Description,url}) => {
    return <header className={styles.header}>
    <h1>Firula</h1>
     <div className={styles.user}>
     <div>
        <h3>{User}</h3>
        <p>{Description}</p>
     </div>
     <Image className={styles.image} src={picPlaceholder} alt="Profile pic" width={75} height={75}></Image>
     </div>
     </header>
}