"use client"
import Image from "next/image"
import Link from 'next/link'
import { useRevlyContenxt } from "@/context/context"
import { useSession } from "next-auth/react"
import {AiOutlineHeart} from "react-icons/ai"
import {SlBasket} from "react-icons/sl"
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi"



const BasketFavoriteTooltip = () => {
    const session = useSession()
    const {items} = useRevlyContenxt()
    const total_price = items?.reduce((acc,obj) => Number(acc) + (Number(obj.price) * obj.count),0)

  return (
    <>
        <div  className="user-favorite search_res" title='favorite products'>
            <label htmlFor="test">
                <input type="checkbox" name="test" id="test" />
                <div className="badgee">
                <FaSearch size={26} />
                </div>
            </label>
            
        </div>
        <div href={"/"} className="user-basket">
            <div className="badgee">
                <SlBasket size={26} />
                {session.data!==null
                    ? 
                        items?.length > 0 ? <span className="badgee-value">{items?.length}</span> :""  
                    :   "" 
                }
                
            </div>
            <div className='info'>
                <span>Total</span>
                <p>${session.data!==null ? total_price > 0 ? total_price : "0.00" : "0.00"}</p>
            </div>
            {session?.data?.user?.name !== "undefiend" && <div className="tooltips">
                <div className="tooltip-info">
                    <div className="tooltip-body">
                        <div className="title">
                            My Basket ({items?.length} product)
                        </div>
                        { items.length > 0
                            ?
                           <>
                                <div className="products">
                                    {items.map((item,i)=>(
                                        <div className="item" key={i}>
                                            <Image src={item.img} alt="product" height={90} width={134} />
                                            <div className="left">
                                                <p>{item.name}</p>
                                                <span>size : S</span>
                                                &nbsp;&nbsp;
                                                <span>piece: 1</span>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>
                                    ))}                             
                                </div>
                                <Link href={"/profile/userbasket"} className='go-basket' >
                                    go to basket
                                </Link>
                           </>
                        :<span className="empty_tooltip">Your basket is empty</span>
                        }
                    </div>
                </div>
            </div>}
        </div>

        <Link href={"/favoritelist"} className="user-favorite user-favorite-real" title='favorite products'>
            <div className="badgee">
                <AiOutlineHeart size={26} />
                {/* <span className="badgee-value">
                    1   
                </span> */}
            </div>
        </Link>
    
    </>
  )
}

export default BasketFavoriteTooltip