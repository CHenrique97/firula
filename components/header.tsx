import { FC, useState } from "react";
import Image from "next/image";
import picPlaceholder from "../public/userIcon.jpg"
import styles from "../styles/Header.module.css"
import React from 'react';
import { getUser } from "../shared/services/userServices";

interface fieldProps {
    User: string,
    Description: string,
    url: string
}

interface userProps {
    username: string,
    password: string
}


const sendLogin = async (user: userProps) => {
  const response = await getUser(user.username,user.password);
  console.log(response);
}
const openModal = (user: string,password: string, handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> | undefined,handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> | undefined) => {

    return  <>  
           <div className={styles.modal}>
      <div className="modal-content">
        <h2>Login</h2>

          <label>
            Username:
            <input type="text" value={user} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button  onClick={()=> sendLogin({username:user,password:password})}>Submit</button>

      </div>
    </div>
  
    </>

}

export const Header : FC<fieldProps> = ({User,Description}) => {    
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      }


    return <header className={styles.header}>
    <h1>WeMatch</h1>
     <div className={styles.user}>
     <div className={styles.textBox} >
        <h3>{User}</h3>
        <p>{Description}</p>
     </div>
     { openModal(username,password,handleUsernameChange,handlePasswordChange)}
     <Image className={styles.image} src={picPlaceholder} alt="Profile pic" width={75} height={75} ></Image>
     </div>
     </header>
     
}