import Image from "next/image"
import Link from "next/link"

import mainLogo from 'public/img/header/mainLogo.png'

const Footer = () => {
  return (
   
    <footer className="footer">
        <div className="title">
            <h4>
                Join the movement and get exclusive deals, promotions, <br /> and updates on your favorite brands
            </h4>
        </div>
        <div className="info">
            <div className="left">
                <form className="memberMail">
                    <label htmlFor="member">
                        <input type="mail" id="member" name="member" placeholder="Email" />
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                <p>By submitting your email address, you agree toreceive marketing emails from Rivly, and accept our <Link href={"/"}>terms & conditions</Link> and <Link href={"/"}>privacy policy</Link></p>
            </div>
            <div className="right">
                <div className="links_group">
                    <div className="item">
                        <span>
                            SHOP
                        </span>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    HOMEPAGE
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    SHOPPER COMMUNITY
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <span>ABOUT</span>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    OUR MISSION
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    CAREERS
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    PARTNERSHIPS
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    PRESS
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    ARTICLES
                                </Link>
                            </li>
                        </ul>
                    </div>              
                    <div className="item">
                        <span>SUPPORT</span>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    CONTACT SELLER
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    ORDERS & RETURNS
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    HELP CENTER & FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>               
                    <div className="item">
                        <span>
                            SOCIAL MEDIA
                        </span>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    INSTAGRAM
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    FACEBOOK
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    TWITTER
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    YOUTUBE
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <span>
                            SELL
                        </span>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    SELL ON RIVLY
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    SELLER FACEBOOK GROUP
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="rights">
            <Image src={mainLogo} alt="logo" />
            <p>Copyright © Rivly</p>
            <p>2023</p>
        </div>
    </footer>
   
  )
}

export default Footer