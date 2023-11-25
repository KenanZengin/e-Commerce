import Image from 'next/image'
import Link from 'next/link'
import Categories from '../components/categories'
import {BsFillArrowRightCircleFill, BsQuestionCircle} from "react-icons/bs"
import mainLogo from 'public/img/header/mainLogo.png'
import head1 from 'public/img/sections/head1.jpg'
import head2 from 'public/img/sections/head2.jpg'
import head3 from 'public/img/sections/head3.jpg'
import head4 from 'public/img/sections/head4.jpg'
import categori_1 from 'public/img/categories/categori_1.png'
import UserSection from './usersection'
import CategoriSearch from './categorisearch'


const Header = () => {


  return (
    <>
        <header className='header'>
            <div className="header-web">
                <div className="header-web-top">
                    <div className="header-web-top-left">
                        <div className="head-logo noselect">
                            <Link href={"/"} rel="bookmark" title="Skullcandy">
                                <Image src={mainLogo} alt="Logo" placeholder='blur' width={77} height={33} property={"true"} />
                            </Link>
                        </div>
                        <div className="departmans" tabIndex={1}>
                            <div className="left">
                                <Image src={head1} alt="img1" placeholder='blur' />
                                <Image src={head2} alt="img1" placeholder='blur' />
                                <Image src={head3} alt="img1" placeholder='blur' />
                                <Image src={head4} alt="img1" placeholder='blur' />
                            </div>
                            <div className="right">
                                <p>DEPARTMENTS</p>
                                <p>+24 Categories</p>
                                <button >   
                                    View All 
                                    <BsFillArrowRightCircleFill size={18} />         
                                </button>
                            </div>
                            <Categories />
                        </div>        
                    </div>
                    <div className="header-web-top-right">
                        <div className="search-bar">
                           
                           <CategoriSearch />
                            
                        </div>
                        <div className="user-section">

                          <UserSection />

                        </div>
                    </div>
                </div>
                <div className="header-web-navbar">
                    <nav>
                        <Link href={"/productPage"} className='nav-item'>
                            Populer Product
                        </Link>
                        <Link href={"/productPage"} className='nav-item'>
                            Favorite Brands
                        </Link>
                        <Link href={"/productPage"} className='nav-item'>
                            Today's Deals
                        </Link>
                        <Link href={"/productPage"} className='nav-item'>
                            Top Reviews
                        </Link>
                        <Link href={"/productPage"} className='nav-item'>
                            Highest Rewards
                        </Link>
                        <Link href={"/productPage"} className='nav-item'>   
                            Recently Viewed
                        </Link>
                    </nav>  
                </div>
            </div> 
        </header>
        <button id='close-btn'></button>
    </>
  )
}

export default Header

