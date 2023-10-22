import Link from 'next/link'

import {BiUser} from "react-icons/bi"
import {GrMapLocation} from "react-icons/gr"
import {FaRegCreditCard,FaRegUser,FaMapLocation} from "react-icons/fa6"
import {FiHelpCircle} from "react-icons/fi"

const UserLayout = ({children}) => {
  return (
    <div className='user__info'>
        <div className="user__info__wrapper">
            <div className="sidebar">
                <p>
                    kenanZengin@gmail.com
                </p>
                <div className="sidebar_menu">
                    <p>
                        My Account & Help
                    </p>
                    <ul>
                        <li>
                            <Link href={"membershipInformation"} className='active'>
                                <FaRegUser size={17} />
                                My User Information
                            </Link>
                        </li>
                        <li>
                            <Link href={"address"}>
                                <FaMapLocation size={17} />
                                My Address Information
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <FaRegCreditCard size={17} />
                                My Registered Cards
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <FiHelpCircle size={17} />
                                Help
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="user_info_2">
                {children}
            </div>
        </div>
  </div>
  )
}

export default UserLayout