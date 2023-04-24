import { FC, use, useEffect, useState } from "react";
import Image from "next/image";
import picPlaceholder from "../public/userIcon.jpg"
import styles from "../styles/Header.module.css"
import React from 'react';
import { parse } from 'cookie';

import { getUser } from "../shared/services/userServices";
import { useLoginStore } from "../shared/utils/zustandStore";
import { decodeJWTFromCookie } from "../shared/utils/jwtDecoder";
interface fieldProps {
    User: string,
    Description: string,
    url: string
}



const userInfo = {
  username: '',
uuid: '',
loginModal: false,
}
const sendLogin = async (user: userProps) => {
  const response = await getUser(user.username,user.password);
  useLoginStore.setState({username: response.Name, uuid: response.ID, loginModal: false})
  console.log(response)
}

const openModal = (user: string,password: string, handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> | undefined,handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> | undefined, handleModal: any,) => {
    return  <>  
           <div className={styles.modal}>
      <div className="modal-content">
        <span className="close" onClick={()=> handleModal()}>&times;</span>
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

  const loginState = useLoginStore((state) => state.loginModal)
  const user = useLoginStore((state) => state.username)
  const handleClick =useLoginStore((state) => state.setLoginModal)


  
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
        <h3>{user}</h3>
        <p>{Description}</p>
     </div>
     { loginState ? openModal(username,password,handleUsernameChange,handlePasswordChange,handleClick) : null}
     <Image className={styles.image} src={picPlaceholder} alt="Profile pic" width={75} height={75} onClick={()=> handleClick()}></Image>
     </div>
     </header>
     
}