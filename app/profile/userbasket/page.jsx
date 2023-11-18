"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRevlyContenxt } from "@/context/context"
import {HiArrowLongLeft} from "react-icons/hi2"
import BasketItemList from "@/components/basketItemList"


const UserBasket = () => {

    const {items,removeFromBasket,increasingProduct,creasingProduct} = useRevlyContenxt()
    const {data} = useSession()
    
    const total_price = items?.reduce((acc,obj) => Number(acc) + (Number(obj.price) * obj.count),0)

  return (
    <div className="user_basket">
        
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
                    <span>{items.length} Item{items.length > 9 && "s"}</span>
                </div>
                <div className="items">
                    {items.length > 0 
                        ? items?.map((item)=>(
                            <BasketItemList key={item._id} item={item} crease={creasingProduct} remove={removeFromBasket} increase={increasingProduct} />
                        ))
                        :<span className="no-item">There are no items in your basket</span>
                    }
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
                                <p>${items.length > 0 ? total_price : "0.00"}</p>
                            </li>
                            <li>
                                <p>Savings</p>
                                <p>${items.length > 0 ? "-5.23" : "0.00"}</p>
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
                                <p>$ {items.length > 0 ? total_price - 5.23 : "0.00"}</p>
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