"use client"
import { useSession } from 'next-auth/react'
// import Information from '@/components/information'
// import {BiUser} from "react-icons/bi"
// import {GrMapLocation} from "react-icons/gr"
// import {FaRegCreditCard,FaRegUser,FaMapLocation} from "react-icons/fa6"
// import {FiHelpCircle} from "react-icons/fi"




const UserLayout = async ({children}) => {

    const session =  useSession()

  return (
    <div className='user__info'>
        <div className="user__info__wrapper">
            <div className="sidebar">
                <p>
                    {session?.data?.user?.email}
                </p>
                <div className="sidebar_menu">
                    <p>
                        My Account & Help
                    </p>
                    

                </div>
            </div>
            <div className="user_info_2">
                <div className="titlee">
                    My User Information
                </div>
                {children}
            </div>
        </div>
  </div>
  )
}

export default UserLayout