"use client"
import Link from "next/link"
import Image from "next/image"

import { useRevlyContenxt } from "@/context/context"
import {LiaCommentDotsSolid,LiaShippingFastSolid} from "react-icons/lia"
import {BsFillStarFill} from "react-icons/bs"
import {AiOutlinePlusCircle} from "react-icons/ai"


const ProductItem = ({data}) => {

    const {addToBasket,items} = useRevlyContenxt()
    const findBasketItem = items.find((basket_item) => basket_item._id == data._id )

  return (
    <>
        <div  className="productts" key={data._id}>
            <div className="productts_img">
                <Image src={data.img} alt="product" width={372} height={360} />
                <div className="add_baskets" onClick={() =>addToBasket(data,findBasketItem)}>
                    <AiOutlinePlusCircle size={37} />
                </div>
            </div>
            <Link href={`productDetail/${data.name}?id=${Number(data._id)}`} className="productts_info">
                <div className="color">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className='dis'> +12 variations</p>
                </div>
                <h5>{data.name}</h5>
                <p className="dis">{data.producer}</p>
                <div className="product_point">
                    <div className="stars">
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <span className="dis">{data.star}</span>
                    </div>
                    <div className="comment">
                    <LiaCommentDotsSolid size={25} />
                    <span className="dis">{data.comments} Reviews</span>
                </div>
                </div>
                <div className="product_price">
                    <p>${data.price}</p>
                    <div className="discount">
                        <span>${data.real_price}</span>
                        <span className="dis">you save ${Number(data.real_price) - Number(data.price)}</span>
                    </div>
                    <div className="shipping">
                        <span><LiaShippingFastSolid size={25} /></span>
                        <span className="dis">Express Shipping</span>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ProductItem