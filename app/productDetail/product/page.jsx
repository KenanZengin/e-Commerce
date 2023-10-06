import Image from "next/image"

import {BsArrowUpRightCircleFill, BsFillStarFill} from "react-icons/bs"
import {LiaCommentDotsSolid, LiaShippingFastSolid} from "react-icons/lia"
import {FiBox} from "react-icons/fi"
import {SlBasket} from "react-icons/sl"
import {TbPointFilled, TbTruckReturn} from "react-icons/tb"
import {MdOutlineAccessTime} from "react-icons/md"
import product0 from "public/img/product/product0.webp"
import product1 from "public/img/product/product1.webp"
import product2 from "public/img/product/product2.webp"
import product3 from "public/img/product/product4.webp"
import color1 from "public/img/product/color1.png"
import color2 from "public/img/product/color2.png"
import color3 from "public/img/product/color3.png"
import Link from "next/link"

const ProductDetail = () => {
  return (
    <div className="product">
        <div className="product-wrapper">
            <div className="product-imgs">
                <div className="img-left">
                    <Image src={product0} alt="product" className="active" />
                    <Image src={product1} alt="product" />
                    <Image src={product2} alt="product" />
                    <Image src={product3} alt="product" />
                </div>
                <div className="img-right">
                    <Image src={product0} alt="product" />
                </div>
            </div>
            <div className="product-info">
                <div className="product-title">
                    <h3>
                        Classic SHIRT
                    </h3>
                    <Link href={"/"}>
                        by <span>Zenana</span>
                        <BsArrowUpRightCircleFill size={22} />
                    </Link>
                </div>
                <div className="product-stars">
                    <div className="star">
                        <BsFillStarFill size={25} />
                        <BsFillStarFill size={25} />
                        <BsFillStarFill size={25} />
                        <BsFillStarFill size={25} />
                        <BsFillStarFill size={25} />
                    </div>
                    <div className="point">
                        4.5
                    </div>
                    <div className="comment">
                        <LiaCommentDotsSolid size={30} />
                        110 Reviews
                    </div>
                </div>
                <div className="product-price">
                    <div className="price">
                        <p>$900</p>
                        <div>
                            <p>$20.99</p>
                            <span>you save 14$</span>
                        </div>
                    </div>
                    <div className="shipping">
                        <div>
                            <LiaShippingFastSolid size={25} />
                            <span>Free Shipping</span>
                        </div>
                        <div>
                            <FiBox size={25} />
                            <span>Free Returns</span>
                        </div>
                    </div>
                </div>
                <div className="product-colors">
                    <p><span>Colors Avaliable:</span> Green</p>
                    <div className="color">
                        <button>
                            <Image src={color1} alt="color"/>
                        </button>
                        <button>
                            <Image src={color2} alt="color"/>
                        </button>
                        <button>
                            <Image src={color3} alt="color"/>
                        </button>
                    </div>
                </div>
                <div className="product-size">
                    <p><span>Select Size:</span> Large</p>
                    <div className="color">
                    <button >
                        Small
                    </button>
                    <button >
                        Medium
                    </button>
                    <button className="active">
                        Large
                    </button>
                    </div>
                </div>
                <div className="product-special-offer">
                    <button>
                        <span>Buy 1</span>
                        <p>$36.00 <span>/ ea</span> </p>
                    </button>
                    <button>
                        <span>Buy 2</span>
                        <p>$40.00 <span>/ ea</span> </p>
                    </button>
                    <button>
                        <span>Buy 3</span>
                        <p>$45.00 <span>/ ea</span> </p>
                    </button>
                    <button>
                        <p>Buy <br />More</p>
                    </button>
                </div>
                <div className="add-basket">
                    <button>
                        <SlBasket size={20} />
                        Add to card
                        <TbPointFilled size={10} />
                        $900.00
                    </button>
                </div>
                <div className="options">
                    <div className="option">
                        <div className="img">
                            <LiaShippingFastSolid size={25} />
                        </div>
                        <div className="info">
                            <p>Standart Shipping</p>
                            <div>
                                <span>Free</span>
                                <span><MdOutlineAccessTime size={12}/> Tue, Jun 13 - Thu, Jun 15</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="img">
                            <LiaShippingFastSolid size={25} />
                        </div>
                        <div className="info">
                            <p>Express Shipping</p>
                            <div>
                                <span>$1.99/item</span>
                                <span><MdOutlineAccessTime size={12}/> Tue, Jun 13</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="img">
                            <TbTruckReturn size={25} />
                        </div>
                        <div className="info">
                            <p>Return Policy</p>
                            <div>
                                <span>Free</span>
                                <span><MdOutlineAccessTime size={12}/> Within 30 days of receipt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail