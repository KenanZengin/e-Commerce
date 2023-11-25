"use client"
import { useRevlyContenxt } from "@/context/context"
import {HiArrowNarrowRight} from "react-icons/hi"
import { DataSetProducts } from "@/dataset/products"
import ProductItem from "@/components/productItem"



const FavoriteProduct =  () => {

    const {favoriteItems} = useRevlyContenxt()


  return (
    <div className='product_page'>
        <div className="bread_crumbb">
            <span>Favorite  Products</span>
            
        </div>
        <div className="product_list">
            {favoriteItems.map((item)=>(
              <ProductItem data={item} key={item._id} />
            ))}
        </div>
    </div>
  )
}

export default FavoriteProduct