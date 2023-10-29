"use client"
import { signOut } from "next-auth/react"
import { BiLogOut } from "react-icons/bi"
const LogOut = () => {
  return (
   <button onClick={() => signOut()}>
        <BiLogOut size={25}/>
        Sign Out
   </button>
  )
}

export default LogOut