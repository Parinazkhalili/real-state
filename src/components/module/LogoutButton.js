"use client"

import styles from "@/module/LogoutButton.module.css"
import {FiLogOut} from "react-icons/fi";
import {signOut} from "next-auth/react"


function LogoutButton() {
  return (
   <button className={styles.button} onClick={signOut}>
    <FiLogOut />
    خروج
   </button>
  )
}

export default LogoutButton