import Image from 'next/image'
import Link from 'next/link'

import {AiOutlineHeart} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {FaRegUser} from "react-icons/fa6"
import {SlBasket} from "react-icons/sl"
import {BsChevronDown} from "react-icons/bs"
import mainLogo from 'public/img/mainLogo.png'


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
                <button className='categiroies'>
                    <span>All Categories</span>
                    <BsChevronDown size={12} />
                </button>
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
   </header>
  )
}

export default Header