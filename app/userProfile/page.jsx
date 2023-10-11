import Link from "next/link"
import Image from "next/image"

import {BsClock} from "react-icons/bs"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {FaTrash} from "react-icons/fa"
import {BiTransferAlt} from "react-icons/bi"
import {AiTwotoneStar} from "react-icons/ai"
import {IoAnalyticsOutline, IoRibbonSharp,IoInfinite} from "react-icons/io5"
import {GiStarsStack} from "react-icons/gi"
import {PiWarningCircle} from "react-icons/pi"
import user_1 from "public/img/sections/random_user2.jpg"

const userProfil = () => {
    
  return (
    <div className="user-profile">
        <div className="user-profile-wrapper">
            <div className="left">
                <div className="user-info">
                    <p>My Public Reviewer Profile</p>
                    <Image src={user_1} alt="user" />
                    <h4>
                        Ryan Reynolds
                    </h4>
                    <span>Member since Apr 2023</span>
                </div>
                <div className="user-stats">
                    <p>My Lifetime Stats</p>
                    <ul>
                        <li key="first">
                            <div className="rewards star">
                                <div className="rewards-icon"> 
                                    <AiTwotoneStar size={25} />
                                </div>
                                <div className="rewards-text">
                                    <span>Total Reviwes</span>
                                    <p>1</p>
                                </div>
                            </div>
                        </li>
                        <li key="second">
                            <div className="rewards helpful">
                                <div className="rewards-icon">
                                    <IoAnalyticsOutline size={15} />
                                </div>
                                <div className="rewards-text">
                                    <span>Total Helpful Clicks</span>
                                    <p>0</p>
                                </div>
                            </div>
                        </li>
                        <li key="third">
                            <div className="rewards star2">
                                <div className="rewards-icon">
                                    <GiStarsStack size={25} />
                                </div>
                                <div className="rewards-text">
                                    <span>Lifetime Review Rewards <PiWarningCircle size={20} /> </span>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li> 
                        <li key={"fourth"}> 
                            <div className="rewards sharp">
                                <div className="rewards-icon">
                                    <IoRibbonSharp size={25} />
                                </div>
                                <div className="rewards-text">
                                    <span>Lifetime Cash Back Rewards <PiWarningCircle size={20} /> </span>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li>
                        <li key={"fifth"}>   
                            <div className="rewards infinite">
                                <div className="rewards-icon">
                                    <IoInfinite size={25} />
                                </div>
                                <div className="rewards-text">
                                    <span>Lifetime Transferred Rewards <PiWarningCircle size={20} /> </span>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <p>Hi Ryan Reynolds</p>
                    <h3>Welcome Back 👋</h3>
                </div>
                <div className="rewards-chart">
                    <div className="title">
                        <p>Current Rewards Balance</p>
                        <div>
                            <Link href={"/"}>
                                <BiTransferAlt size={17} />     
                                Transfer Rewards                            
                            </Link>
                            <Link href={"/"}>
                                <FaTrash size={17} />
                                Claim Rewards              
                            </Link>
                        </div>
                    </div>

                    <div className="stats-info">
                        <div className="info-price">
                            <ul>
                                <li>
                                    <p>Review Rewards</p>
                                    <p>$0.00</p>
                                </li>
                                <li>
                                    <p>CashBack Rewards</p>
                                    <p>$0.00</p>
                                </li>
                                <li>
                                    <p>Purchased Rewards</p>
                                    <p>$0.00</p>
                                </li>
                                <li>
                                    <span></span>
                                </li>
                                <li>
                                    <p>Avaliable to Spend Now</p>
                                    <p>$125.00</p>
                                </li>
                                <li>
                                    <p className="disabledd">Pending Rewards<PiWarningCircle size={20}/></p>
                                    <p className="disabledd">$79.00</p>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="graph">
                            <div className="graph-container">
                                    <div className="percent">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle" strokeDasharray="100, 100" d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <path className="circle" strokeDasharray="85, 100" d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <path className="circle" strokeDasharray="70, 100" d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <path className="circle" strokeDasharray="30, 100" d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        </svg>
                                    </div>
                                    <p>Avaliable <br /> $ 125.00</p>
                            </div>
                            <div className="state">
                                <div className="percent">
                                    <div className="check">
                                        <p>
                                            <AiOutlineCheckCircle size={18} />
                                        </p>
                                        <span>Avaliable</span>
                                    </div>
                                    <div className="value">
                                        25%
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="watch">
                                        <p>
                                            <BsClock size={18} />
                                        </p>
                                        <span>Avaliable</span>
                                    </div>
                                    <div className="value">
                                        45%
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default userProfil


/* style={{'--bgColor' : `#${color}`}} */