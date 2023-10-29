
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/route"
import LogOut from '../components/logout'
import {HiOutlineUserCircle} from "react-icons/hi2"
import {AiOutlineHeart} from "react-icons/ai"
import {CgFileDocument} from "react-icons/cg"
import {LiaComment} from "react-icons/lia"
import {FaRegUser} from "react-icons/fa6"
import {SlBasket} from "react-icons/sl"
import { BsQuestionCircle} from "react-icons/bs"
import {BiLogOut} from "react-icons/bi"
import first from "public/img/recommedProduct/first.jpg"
import second from "public/img/recommedProduct/second.jpg"



const UserSection = async () => { 

    const session = await getServerSession(authOptions)
    console.log(session);
   

  return (
    <>
    
        <div href={"/"} className="user-basket">
            <div className="badgee">
                <SlBasket size={26} />
                {/* <span className="badgee-value">
                    3  
                </span> */}
            </div>
            <div className='info'>
                <span>Total</span>
                <p>$0.00</p>
            </div>
            {session!==null && <div className="tooltips">
                <div className="tooltip-info">
                    <div className="tooltip-body">
                        <div className="title">
                            My Basket (3 product)
                        </div>
                        <div className="products">
                            <div className="item">
                                <Image src={first} alt='product' />
                                <div className="left">
                                    <p>Curve OAK Chair</p>
                                    <span>size: S </span>
                                    &nbsp;&nbsp;
                                    <span>piece: 1</span>
                                    <p>$125.37</p>
                                </div>
                            </div>
                            <div className="item">
                                <Image src={second} alt='product' />
                                <div className="left">
                                    <p>Curve OAK Chair</p>
                                    <span>size: S</span>
                                    &nbsp;&nbsp;
                                    <span>piece: 1</span>
                                    <p>$125.37</p>
                                </div>
                            </div>                                           
                        </div>
                        <Link href={"/profile/userbasket"} className='go-basket' >
                            go to basket
                        </Link>
                    </div>
                </div>
            </div>}
        </div>

        <Link href={"/"} className="user-favorite" title='favorite products'>
            <div className="badgee">
                <AiOutlineHeart size={26} />
                {/* <span className="badgee-value">
                    1   
                </span> */}
            </div>
        </Link>
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
                                    <Link href={"/"} className="profile">
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