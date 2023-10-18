import Image from "next/image"
import Link from "next/link"

import {AiOutlineClose} from "react-icons/ai"
import {HiArrowLongLeft} from "react-icons/hi2"
import {FaArrowsRotate} from "react-icons/fa6"
import {CgArrowUpR} from "react-icons/cg"
import product_1 from "public/img/product/review1.png"
import product_2 from "public/img/product/review2.png"



const Orders = () => {
  return (
    <div className='orders'>
        <div className="title">
            Your orders
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
                   <div>
                        <p>Order date</p>
                        <p>17 September 2023 - 21:28</p>
                   </div>
                   <div>
                        <p>Order Summary</p>
                        <p>1 delivery, 1 product</p>
                   </div>
                   <div>
                        <p>Buyer</p>
                        <p>Kenan Zengin</p>
                   </div>
                   <div>
                        <p>Amounty</p>
                        <p>$900</p>
                   </div>
                   <div>
                        <Link href={"/"}>
                            Order Detail
                        </Link>
                   </div>
                </div>
                
            </div>
            <div className="item">
                <div className="info">
                    <Image src={product_2} alt="product" />
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
                   <div>
                        <p>Order date</p>
                        <p>17 September 2023 - 21:28</p>
                   </div>
                   <div>
                        <p>Order Summary</p>
                        <p>1 delivery, 1 product</p>
                   </div>
                   <div>
                        <p>Buyer</p>
                        <p>Kenan Zengin</p>
                   </div>
                   <div>
                        <p>Amounty</p>
                        <p>$900</p>
                   </div>
                   <div>
                        <Link href={"/"}>
                            Order Detail
                        </Link>
                   </div>
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default Orders