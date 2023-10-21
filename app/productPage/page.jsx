import Link from "next/link"
import Image from "next/image"

import {LiaCommentDotsSolid,LiaShippingFastSolid} from "react-icons/lia"
import {BsFillStarFill} from "react-icons/bs"
import {HiArrowNarrowRight} from "react-icons/hi"
import first from "public/img/recommedProduct/first.jpg"
import second from "public/img/recommedProduct/second.jpg"
import third from "public/img/recommedProduct/third.jpg"
import forth from "public/img/recommedProduct/forth.jpg"
import fifth from "public/img/recommedProduct/fifth.jpg"
import sixth from "public/img/recommedProduct/sixth.jpg"
import seventh from "public/img/recommedProduct/seventh.jpg"
import eighth from "public/img/recommedProduct/eighth.jpg"
import nineth from "public/img/recommedProduct/nineth.jpg"
import tenth from "public/img/recommedProduct/tenth.jpg"
import eleventh from "public/img/recommedProduct/eleventh.jpg"
import twelfth from "public/img/recommedProduct/twelfth.jpg"

const ProductPage = () => {
  return (
    <div className='product_page'>
        <div className="bread_crumbb">
            <span>Popular  Products</span>
            <HiArrowNarrowRight size={20} />
            <span>Armchair</span>
        </div>
        <div className="head">
            <div className="title">
                <h2>Slance Dining Chair</h2>
                <span>45 results</span>
            </div>
            <div className="search-detail">
                <button className="active">
                    Express Shipping
                </button>
                <button>
                    Made in USA
                </button>
                <button>
                    Assembled in USA
                </button>
                <button>
                    All Filtres
                </button>
            </div>
        </div>
        <div className="product_list">
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
            <div className="productts">
                <div className="productts_img">
                    <Image src={sixth} alt='product' />
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
                    <Image src={seventh} alt='product' />
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
                    <Image src={eighth} alt='product' />
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
                    <Image src={nineth} alt='product' />
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
                    <Image src={tenth} alt='product' />
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
                    <Image src={eleventh} alt='product' />
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
                    <Image src={twelfth} alt='product' />
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

export default ProductPage