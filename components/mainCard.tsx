import { FC } from "react";
import Image from 'next/image'
import { ICard } from "../shared/interfaces/ICard";
import styles from "../styles/MainCard.module.css"

export const MainCard : FC<ICard> = ({title,description,rating,imageUrl}) => {
    return <>
    <div className={styles.MainCard}>
        <div className="text">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <img src={imageUrl} alt="Field image"  width={300} height={300}/>
    </div>
    </>

}