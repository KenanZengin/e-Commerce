"use client"
import { useRevlyContenxt } from "@/context/context"
import {SlBasket} from "react-icons/sl"
import {TbPointFilled} from "react-icons/tb" 
 
const BasketBtn = ({data}) => {

  const {addToBasket,items} = useRevlyContenxt()
  const findBasketItem = items.find((item) => item._id == data._id )

  return (
    <button onClick={() => addToBasket(data,findBasketItem)}>
        <SlBasket size={20} />
        {findBasketItem ? "Remove from basket" : "Add to basket"}
        <TbPointFilled size={16} />
        ${data.price}
    </button>
  )
}

export default BasketBtn