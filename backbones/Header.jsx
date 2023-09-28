import Image from 'next/image'
import Link from 'next/link'

import {AiOutlineHeart} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {FaRegUser} from "react-icons/fa6"
import {SlBasket} from "react-icons/sl"
import {BsChevronDown} from "react-icons/bs"
import mainLogo from 'public/img/mainLogo2.png'


const Header = () => {
  return (
   <header className='header'>
     <div className="header-web">
        <div className="header-web-left">
            <div className="head-logo noselect">
                <Link href={"/"} rel="bookmark" title="Skullcandy">
                    <Image src={mainLogo} alt="Logo" />
                </Link>
            </div>
            <nav>
                <Link href={"/"} className='nav-item'>
                    Home
                </Link>
                <Link href={"/"} className='nav-item'>
                    Trending Products
                </Link>
                <Link href={"/"} className='nav-item'>
                    Today's Deals
                </Link>
                <Link href={"/"} className='nav-item'>
                    Customer Services
                </Link>
            </nav>
        </div>
        <div className="header-web-right">
            <div className="search-bar">
                <label htmlFor="search">
                    <BiSearch size={18} />
                    <input type="text" id="search" placeholder='Search Products' />
                </label>
                <div className='categories-wrapper'>
                    <button className='categories'>
                        <span>All Categories</span>
                        <BsChevronDown size={12} />
                    </button>
                    <ul className='categories-list' tabIndex={1} >
                        <li>
                            <Link href={"/"}>
                                Electronics
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Jewelry
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Toys
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Sports
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Watches
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Fine arts
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Software
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Furniture
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Cosmetic
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Fashion
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href={"/"} className='search'>
                    <BiSearch size={22} />
                </Link>
            </div>
            <div className="user-section">
                <Link href={"/"} className="user-account" title='sign in'>
                    <span className="badgee">
                    <FaRegUser size={22} />
                    </span>
                    <div className='info'>
                        <span>Sign in</span>
                        <p>Account</p>
                    </div>
                </Link>
                <Link href={"/"} className="user-favorite" title='favorite products'>
                    <div className="badgee">
                        <AiOutlineHeart size={26} />
                    </div>
                </Link>
                <Link href={"/"} className="user-basket">
                    <div className="badgee">
                        <SlBasket size={26} />
                    </div>
                    <div className='info'>
                        <span>Total</span>
                        <p>$0.00</p>
                    </div>
                </Link>
            </div>
        </div>
     </div>
    
  
   
    <button id="close_btn"></button>
     
   </header>
  )
}

export default Header