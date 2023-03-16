import { FC } from "react";
import Image from 'next/image'
import { ICard } from "../shared/interfaces/ICard";
import styles from "../styles/Card.module.css"

export const Card : FC<ICard> = ({title,description,rating,imageUrl}) => {
    return <>
    <div className={styles.card}>
        <div className="text">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <img src={imageUrl} alt="Field image"  width={100} height={100}/>
    </div>
    </>

}