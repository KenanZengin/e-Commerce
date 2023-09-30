import Image from 'next/image'
import Link from 'next/link'

import {AiOutlineHeart} from "react-icons/ai"
import {FaRegUser} from "react-icons/fa6"
import {SlBasket} from "react-icons/sl"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {FiSearch} from "react-icons/fi"
import mainLogo from 'public/img/mainLogo.png'
import head1 from 'public/img/head1.jpg'
import head2 from 'public/img/head2.jpg'
import head3 from 'public/img/head3.jpg'
import head4 from 'public/img/head4.jpg'

const Header = () => {
  return (
   <header className='header'>
        <div className="header-web">
            <div className="header-web-top">
                <div className="header-web-top-left">
                    <div className="head-logo noselect">
                        <Link href={"/"} rel="bookmark" title="Skullcandy">
                            <Image src={mainLogo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="departmans">
                        <div className="left">
                            <Image src={head1} alt="img1" />
                            <Image src={head2} alt="img1" />
                            <Image src={head3} alt="img1" />
                            <Image src={head4} alt="img1" />
                        </div>
                        <div className="right">
                            <p>DEPARTMENTS</p>
                            <p>+24 Categories</p>
                            <Link href={"/"}>   
                                View All 
                                <BsFillArrowRightCircleFill size={18} />         
                            </Link>
                        </div>
                    </div>         
                </div>
                <div className="header-web-top-right">
                    <div className="search-bar">
                        <label htmlFor="search">
                            <FiSearch size={24} />
                            <input type="text" id="search" name="search" placeholder='Search Products' />
                        </label>
                        
                    </div>
                    <div className="user-section">
                        <Link href={"/"} className="user-basket">
                            <div className="badgee">
                                <SlBasket size={26} />
                            </div>
                            <div className='info'>
                                <span>Total</span>
                                <p>$0.00</p>
                            </div>
                        </Link>
                        <Link href={"/"} className="user-favorite" title='favorite products'>
                            <div className="badgee">
                                <AiOutlineHeart size={26} />
                                <span className="badgee-value">
                                    1   
                                </span>
                            </div>
                        </Link>
                        
                        <Link href={"/"} className="user-account" title='sign in'>
                            <span className="badgee">
                            <FaRegUser size={22} />
                            </span>
                            <div className='info'>
                                <span>Sign in</span>
                                <p>Account</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="header-web-navbar">
                <nav>
                    <Link href={"/"} className='nav-item'>
                        Populer Product
                    </Link>
                    <Link href={"/"} className='nav-item'>
                        Favorite Brands
                    </Link>
                    <Link href={"/"} className='nav-item'>
                        Today's Deals
                    </Link>
                    <Link href={"/"} className='nav-item'>
                        Top Reviews
                    </Link>
                    <Link href={"/"} className='nav-item'>
                        Highest Rewards
                    </Link>
                    <Link href={"/"} className='nav-item'>   
                        Recently Viewed
                    </Link>
                </nav>  
            </div>
        </div>
    <button id="close_btn"></button>
   </header>
  )
}

export default Header

