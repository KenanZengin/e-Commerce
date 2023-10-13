import Image from 'next/image'

import {BsFillStarFill} from "react-icons/bs"
import {LiaCommentDotsSolid, LiaShippingFastSolid} from "react-icons/lia"
import first from "public/img/recommedProduct/first.jpg"
import second from "public/img/recommedProduct/second.jpg"
import third from "public/img/recommedProduct/third.jpg"
import forth from "public/img/recommedProduct/forth.jpg"
import fifth from "public/img/recommedProduct/fifth.jpg"

const RecommedProduct = () => {
  return (
   <div className='recommend_products'>
        <h3>Recommended Products</h3>
        <div className="products">
            <div className="productts">
                <div className="productts_img">
                    <Image src={first} alt='product' />
                </div>
                <div className="productts_info">
                    <div className="color">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className='dis'> +12 variations</p>
                    </div>
                    <h5>Curve OAK Chair</h5>
                    <p className='dis'>Andree by Unit</p>
                    <div className="product_point">
                        <div className="stars">
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <span className="dis">4.5</span>
                        </div>
                        <div className="comment">
                            <LiaCommentDotsSolid size={25} />
                            <span className="dis">100 Reviews</span>
                        </div>

                    </div>
                    <div className="product_price">
                        <p>$900.00</p>
                        <div className='discount'>
                            <span>$925.00</span>
                            <span className='dis'>you save $25</span>
                        </div>
                        <div className='shipping'>
                            <span><LiaShippingFastSolid size={25} /></span>
                            <span className="dis">Express Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productts">
                <div className="productts_img">
                    <Image src={second} alt='product' />
                </div>
                <div className="productts_info">
                    <div className="color">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className='dis'> +12 variations</p>
                    </div>
                    <h5>Curve OAK Chair</h5>
                    <p className='dis'>Andree by Unit</p>
                    <div className="product_point">
                        <div className="stars">
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <span className="dis">4.5</span>
                        </div>
                        <div className="comment">
                            <LiaCommentDotsSolid size={25} />
                            <span className="dis">100 Reviews</span>
                        </div>

                    </div>
                    <div className="product_price">
                        <p>$900.00</p>
                        <div className='discount'>
                            <span>$925.00</span>
                            <span className='dis'>you save $25</span>
                        </div>
                        <div className='shipping'>
                            <span><LiaShippingFastSolid size={25} /></span>
                            <span className="dis">Express Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productts">
                <div className="productts_img">
                    <Image src={third} alt='product' />
                </div>
                <div className="productts_info">
                    <div className="color">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className='dis'> +12 variations</p>
                    </div>
                    <h5>Curve OAK Chair</h5>
                    <p className='dis'>Andree by Unit</p>
                    <div className="product_point">
                        <div className="stars">
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <span className="dis">4.5</span>
                        </div>
                        <div className="comment">
                            <LiaCommentDotsSolid size={25} />
                            <span className="dis">100 Reviews</span>
                        </div>

                    </div>
                    <div className="product_price">
                        <p>$900.00</p>
                        <div className='discount'>
                            <span>$925.00</span>
                            <span className='dis'>you save $25</span>
                        </div>
                        <div className='shipping'>
                            <span><LiaShippingFastSolid size={25} /></span>
                            <span className="dis">Express Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productts">
                <div className="productts_img">
                    <Image src={forth} alt='product' />
                </div>
                <div className="productts_info">
                    <div className="color">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className='dis'> +12 variations</p>
                    </div>
                    <h5>Curve OAK Chair</h5>
                    <p className='dis'>Andree by Unit</p>
                    <div className="product_point">
                        <div className="stars">
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <span className="dis">4.5</span>
                        </div>
                        <div className="comment">
                            <LiaCommentDotsSolid size={25} />
                            <span className="dis">100 Reviews</span>
                        </div>

                    </div>
                    <div className="product_price">
                        <p>$900.00</p>
                        <div className='discount'>
                            <span>$925.00</span>
                            <span className='dis'>you save $25</span>
                        </div>
                        <div className='shipping'>
                            <span><LiaShippingFastSolid size={25} /></span>
                            <span className="dis">Express Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productts">
                <div className="productts_img">
                    <Image src={fifth} alt='product' />
                </div>
                <div className="productts_info">
                    <div className="color">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className='dis'> +12 variations</p>
                    </div>
                    <h5>Curve OAK Chair</h5>
                    <p className='dis'>Andree by Unit</p>
                    <div className="product_point">
                        <div className="stars">
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <BsFillStarFill size={20} />
                            <span className="dis">4.5</span>
                        </div>
                        <div className="comment">
                            <LiaCommentDotsSolid size={25} />
                            <span className="dis">100 Reviews</span>
                        </div>

                    </div>
                    <div className="product_price">
                        <p>$900.00</p>
                        <div className='discount'>
                            <span>$925.00</span>
                            <span className='dis'>you save $25</span>
                        </div>
                        <div className='shipping'>
                            <span><LiaShippingFastSolid size={25} /></span>
                            <span className="dis">Express Shipping</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
   </div>
  )
}

export default RecommedProduct