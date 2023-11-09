"use client"
import Image from "next/image"
import Link from "next/link"
import { useRevlyContenxt } from "@/context/context"
import {AiOutlineClose} from "react-icons/ai"
import {HiArrowLongLeft} from "react-icons/hi2"
import {FaArrowsRotate} from "react-icons/fa6"
import {CgArrowUpR} from "react-icons/cg"
import product_1 from "public/img/product/review1.png"
import product_2 from "public/img/product/review2.png"
import product_3 from "public/img/product/product4.png"


const UserBasket = () => {

    const {test} = useRevlyContenxt()
    
    console.log("basket test",test);

  return (
    <div className="user_basket">
        {test}
        <div className="go_back">
            <Link href={"/"}>
                <HiArrowLongLeft size={20} />
                <span>Return to shopping</span>
            </Link>
        </div>
        <div className="user_basket_content">   
            <div className="left">
                <div className="title">
                    <h3>Shopping cart</h3>
                    <span>3 Items</span>
                </div>
                <div className="items">
                    <div className="item">
                        <div className="info">
                            <Image src={product_1} alt="product" />
                            <div className="product-name">
                                <p>
                                    Curved OAK Chair
                                    <span>Color : Universal Grey Wool/Oak</span>
                                </p>
                                <div>
                                    <FaArrowsRotate size={15} />
                                    Free Returns
                                </div>
                            </div>
                        </div>
                        <div className="piece">
                            <div className="number">
                                <button>-</button>
                                <span>2</span>
                                <button>+</button>
                            </div>
                            <p>
                                <CgArrowUpR size={15} />
                                Save for Later
                            </p>
                        </div>
                        <div className="price">
                            <div className="price_detail">
                                <p>$900.00</p>
                                <div>
                                    <span>$925.00</span>
                                    <span>you save 25$</span>
                                </div>
                            </div>
                            <button className="close">
                                <AiOutlineClose size={20} />
                            </button>
                  
                        </div>
                    </div>

                </div>
            </div>
            <div className="right">
                <div className="summary">
                    <div className="title">
                        <h4>
                            Summary
                        </h4>
                    </div>
                    <div className="info-price">
                        <ul>
                            <li>
                                <p>Subtotal</p>
                                <p>$36000.00</p>
                            </li>
                            <li>
                                <p>Savings</p>
                                <p>-5.23$</p>
                            </li>
                            <li>
                                <p>Standart Shipping</p>
                                <p>Free </p>
                            </li>
                            <li>
                                <p>Taxes</p>
                                <p>Calculated at checkout</p>
                            </li>
                            <li> 
                                <p>Estimated Total</p>
                                <p>$ 36000.00</p>
                            </li>
                        </ul>
                        <button className="go-order">
                            Procced to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserBasket