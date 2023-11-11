import {HiArrowNarrowRight} from "react-icons/hi"
import { DataSetProducts } from "@/dataset/products"
import ProductItem from "@/components/productItem"



const ProductPage =  () => {


  return (
    <div className='product_page'>
        <div className="bread_crumbb">
            <span>Popular  Products</span>
            <HiArrowNarrowRight size={20} />
            <span>Armchair</span>
        </div>
        <div className="head">
            <div className="title">
                <h2>Slance Dining Chair</h2>
                <span>45 results</span>
            </div>
            <div className="search-detail">
                <button className="active" >
                    Express Shipping
                </button>
                <button>
                    Made in USA
                </button>
                <button>
                    Assembled in USA
                </button>
                <button >
                    All Filtres
                </button>
            </div>
        </div>
        <div className="product_list">
            {DataSetProducts.map((item)=>(
              <ProductItem data={item} key={item._id} />
            ))}
        </div>
    </div>
  )
}

export default ProductPage