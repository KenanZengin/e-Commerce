"use client"
import Image from "next/image"
import {FaArrowsRotate} from "react-icons/fa6"
import {CgArrowUpR} from "react-icons/cg"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const BasketItemList = ({item,remove,increase,crease}) => {

    const [productDelete,setProductDelete] = useState(false)

    const deleteWarning = async () => {
        setProductDelete(()=>true)
        await new Promise((resolve) => setTimeout(resolve,1000));
        remove(item._id);
        setProductDelete(() => false)
    }

  return (
    <>
        <div className="item" >
            <div className="info">
            <Image src={item.img} width={102} height={100} alt="product" />
            <div className="product-name">
                <p>
                    {item.name}
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
                    <button onClick={() => crease(item._id)}>-</button>
                    <span>{item.count}</span>
                    <button onClick={() => increase(item._id)}>+</button>
                </div>
                <p>
                    <CgArrowUpR size={15} />
                    Save for Later
                </p>
            </div>
            <div className="price">
                <div className="price_detail">
                    <p>${item.price}</p>
                    <div>
                        <span>${item.real_price}</span>
                        <span>you save ${Number(item.real_price) - Number(item.price)}</span>
                    </div>
                </div>
               <button className="close" onClick={()=>{deleteWarning()}}>
                    <AiOutlineClose size={20} />
                </button>
                {productDelete 
                    &&
                        <span className={`deletedMessage ${productDelete ? "animateWarning" : ""}`}>Product deleted</span>
                }

            </div>
            
        </div>
       
    </>
  )
}

export default BasketItemList