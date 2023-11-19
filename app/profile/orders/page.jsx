import Image from "next/image"
import Link from "next/link"
import { DataSetProducts } from "@/dataset/products"
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
            {DataSetProducts.map((item,i) => (
                i < 3  
                    ?   <div className="item">
                            <div className="info">
                                <Image src={item.img} alt="product" width={74} height={72}/>
                                <div className="product-name">
                                    <p>
                                        {item.name}
                                        <span>Color : Universal Grey Woll/Oak</span>
                                    </p>
                                    <div>
                                        <FaArrowsRotate size={15} />
                                        Free Returns
                                    </div>
                                </div>
                            </div>
                            <div className="piece">
                        <div>
                            <p>Order Date</p>
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
                            <p>${item.real_price}</p>
                        </div>
                            </div>
                        </div>
                    :   ""
            ))}
        </div>
    </div>
  )
}

export default Orders