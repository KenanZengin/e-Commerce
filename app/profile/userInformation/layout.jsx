"use client"
import { useSession } from 'next-auth/react'
import Information from '@/components/information'
import { redirect } from 'next/navigation'




const UserLayout =  ({children}) => {

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
                    <Information />
                    

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