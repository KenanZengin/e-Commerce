import Link from 'next/link'
import Image from 'next/image'

import {FiArrowUpRight} from "react-icons/fi"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import tennis from "public/img/tennis.png"
import sport from "public/img/sport.png"
import swim from "public/img/swim.png"
import lamp from "public/img/lam.png"
import head1 from 'public/img/head1.jpg'
import head2 from 'public/img/head2.jpg'
import head3 from 'public/img/head3.jpg'
import head4 from 'public/img/head4.jpg'
import product from "public/img/product3.png"
import product2 from "public/img/product4.png"
import product3 from "public/img/product5.png"
import product4 from "public/img/product6.png"

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
                    <div className="right">
                        <div className="categories-detail">
                            <p>Clothing</p>
                            <p className='item'>
                                <span>
                                    Accessories
                                </span>
                            </p> 
                            <p>Baby</p>
                            <p>spanets</p>
                            <p className=''>School & Office</p>
                            <p>Handmade</p>
                            <p>Garden & patio</p>
                        </div>
                        <div className="go-detail">
                            <span>
                                View All Categories
                            </span>
                            <FiArrowUpRight size={30} />
                        </div>
                    </div>
                </div>
              
            </div>
            <div className="right">
                <div className="populer_products">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis officia ipsum, cumque assumenda eveniet consequatur voluptas qui doloribus!
                    </p>
                    <div className="departmans">
                        <div className="left">
                            <Image src={head1} alt="img1" />
                            <Image src={head2} alt="img1" />
                            <Image src={head3} alt="img1" />
                            <Image src={head4} alt="img1" />
                        </div>
                        <div className="right">
                            <p>Populer Products </p>
                            <p>+2000 Items</p>
                            <Link href={"/"}>   
                                View All 
                                <BsFillArrowRightCircleFill size={18} />         
                            </Link>
                        </div>
                    </div> 
                </div>
                <div className="product_wrapper">
                    <div className="products">
                        <div className="product">
                            <div className='color'>
                                <div>
                                    <span className='brown'></span>
                                    <span className='grey'></span>
                                </div>
                                <FiArrowUpRight size={30} />
                            </div>
                            <Image src={product} alt='chair' />
                            <div className='info'>
                                <div className='product_text'>
                                    <span>Furniture</span>
                                    <p>Minimal Rose <br />Armchair</p>
                                </div>
                                <div className='price'>
                                    $84
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className='color'>
                                <div>
                                    <span className='blue'></span>
                                    <span className='grey'></span>
                                </div>
                                <FiArrowUpRight size={30} />
                            </div>
                            <div className="img_wrapper">
                                <Image src={product2} alt='camera' />
                            </div>
                            <div className='info'>
                                <div className='product_text'>
                                    <span>Gadgets</span>
                                    <p>Fujifilm Instax <br />Mini 11</p>
                                </div>
                                <div className='price'>
                                    $136
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="best">
                        <div className='info'>
                            <p>
                                Find the best <br />furniture! <Image src={product4} alt='product' />
                            </p>
                            <span>Show now</span>
                        </div>
                        <Image src={product3} alt='product' />
                        <span>
                            <FiArrowUpRight size={30} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section_2