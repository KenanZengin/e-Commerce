"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {BiUser} from "react-icons/bi"
import {GrMapLocation} from "react-icons/gr"
import {FaRegCreditCard,FaRegUser,FaMapLocation} from "react-icons/fa6"
import {FiHelpCircle} from "react-icons/fi"

const Information = () => {

    const pathname = usePathname()
    console.log(pathname);

  return (
    <ul>
        <li>
            <Link href={"membershipInformation"} className={`${pathname == "/profile/userInformation/membershipInformation" ? "active" : ""}`}>
                <FaRegUser size={17} />
                My User Information
            </Link>
        </li>
        <li>
            <Link href={"address"} className={`${pathname == "/profile/userInformation/address" ? "active" : ""}`}>
                <FaMapLocation size={17} />
                My Address Information
            </Link>
        </li>
        <li>
            <Link href={"registered_card"} className={`${pathname == "/profile/userInformation/registered_card" ? "active" : ""}`}>
                <FaRegCreditCard size={17} />
                My Registered Cards
            </Link>
        </li>
        <li>
            <Link href={"help"} className={`${pathname == "/profile/userInformation/help" ? "active" : ""}`}>
                <FiHelpCircle size={17} />
                Help
            </Link>
        </li>
    </ul>
  )
}

export default Information