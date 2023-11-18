import Link from 'next/link'
import { getServerSession } from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/route"
import LogOut from '../components/logout'
import {HiOutlineUserCircle} from "react-icons/hi2"
import {CgFileDocument} from "react-icons/cg"
import {LiaComment} from "react-icons/lia"
import {FaRegUser} from "react-icons/fa6"
import { BsQuestionCircle} from "react-icons/bs"
import BasketFavoriteTooltip from '@/components/basket_favoritetooltip'



const UserSection = async () => { 

    const session = await getServerSession(authOptions)
    

  return (
    <>
    
        <BasketFavoriteTooltip />
        <div className="user-account" title='sign in'>
            <span className="badgee">
            <FaRegUser size={22} />
            </span>
            <div className='info'>
                <span>{session!==null ? session?.user?.name : "Sign in"}</span>
                <p>Account</p>
            </div>
            
            <div className="tooltips">
                <div className="tooltip-info">
                    <div className="tooltip-body">
                        {session 
                            ?   <>
                                    <div className="sections">
                                    <Link href={"/profile/userInformation/membershipInformation"} className="profile">
                                        <HiOutlineUserCircle size={25}/>
                                        <p>User Information</p>
                                    </Link>
                                    <Link href={"/profile/orders"} className="profile">
                                        <CgFileDocument size={25}/>
                                        <p>Orders & Returns</p>
                                    </Link>
                                    <Link href={"/profile/userRewiews"} className="profile">
                                        <LiaComment size={25}/>
                                        <p>Rewiews & Rewards</p>
                                    </Link>
                                    <Link href={"/profile/help"} className="profile">
                                        <BsQuestionCircle size={25}/>
                                        <p>Help & Support</p>
                                    </Link>   
                                    </div>
                                   <LogOut />
                                </>
                            :   <>
                                    <Link href={"/membership/signin"} className='member_ship'> 
                                        Sign In
                                    </Link>
                                    
                                    <Link href={"/membership/signup"} className='member_ship'> 
                                        Sign Up
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default UserSection