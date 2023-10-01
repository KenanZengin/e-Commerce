import Link from 'next/link'
import Image from 'next/image'

import {FiArrowUpRight} from "react-icons/fi"
import tennis from "public/img/tennis.png"
import sport from "public/img/sport.png"
import swim from "public/img/swim.png"
import lamp from "public/img/lam.png"

const Section_2 = () => {
  return (
    <div className='section_2'>
        <div className="section_2_content">
            <div className="left">
                <div className="title">
                    <h2>EXPLORE <br />PRODUCTS</h2>
                </div>
                <div className="box first">
                    <Image src={tennis} alt="tennis" />
                    <div className='info'>
                        <p>LOVE THE SWIM YOU'RE IN</p>
                        <Link href={"/"}>
                            View All
                        </Link>
                    </div>
                    <Image src={sport} alt="tennis" />
                </div>
                <div className="box second">
                    
                    <div className='info'>
                        <p className='infoB'>Love the swim <br /> you're in</p>
                        <Link href={"/"}>
                        Shop Now
                        </Link>
                    </div>
                    <Image src={swim} alt="tennis" />
                    <span>
                        <FiArrowUpRight size={30} />
                    </span>
                </div>
                <div className="third">
                    <div className="left">
                        <div className="product">
                            <div className="color">
                                <span className='brown'></span>
                                <span className='yellow'></span>
                            </div>
                            <Image src={lamp} alt='lamp' />
                            <FiArrowUpRight size={30} />
                        </div>
                        <div className="info">
                            <div>
                                <p>Create amazing <br />lighting</p>
                                <span>Shop Now</span>
                            </div>
                            <div className='price'>
                                $79
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
            <div className="right">

            </div>
        </div>
    </div>
  )
}

export default Section_2