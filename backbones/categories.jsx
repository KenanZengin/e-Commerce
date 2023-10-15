"use client"
import Image from 'next/image'
import Link from 'next/link'

import {AiOutlineClose} from "react-icons/ai"
import {HiArrowNarrowRight} from "react-icons/hi"
import categori_1 from 'public/img/categories/categori_1.png'
import categori_2 from 'public/img/categories/categori_2.png'
import categori_3 from 'public/img/categories/categori_3.png'
import categori_4 from 'public/img/categories/categori_4.png'
import categori_5 from 'public/img/categories/categori_5.png'
import categori_6 from 'public/img/categories/categori_6.png'
import categori_7 from 'public/img/categories/categori_7.png'
import categori_8 from 'public/img/categories/categori_8.png'
import categori_9 from 'public/img/categories/categori_9.png'
import categori_10 from 'public/img/categories/categori_10.png'
import categori_11 from 'public/img/categories/categori_11.png'
import categori_12 from 'public/img/categories/categori_12.png'
import categori_13 from 'public/img/categories/categori_13.png'
import categori_14 from 'public/img/categories/categori_14.png'
import categori_15 from 'public/img/categories/categori_15.png'
import categori_16 from 'public/img/categories/categori_16.png'
import categori_17 from 'public/img/categories/categori_17.png'
import categori_18 from 'public/img/categories/categori_18.png'
import categori_19 from 'public/img/categories/categori_19.png'
import categori_20 from 'public/img/categories/categori_20.png'
import categori_21 from 'public/img/categories/categori_21.png'
import { useEffect, useState } from 'react'


const Categories = () => {

    const [close,setClose] = useState(true)
    useEffect(()=>(
        setClose(true)
    ),[close])
    const imageList = [{img : categori_1 , categoriName : "Arts & Crafts" ,link:"/"},{img : categori_2 , categoriName : "Baby" ,link:"/"},{img : categori_3 , categoriName : "Books" ,link:"/"},{img : categori_4 , categoriName : "Car & Other Vehicles" ,link:"/"},{img : categori_5 , categoriName : "Clothing & Accessories" ,link:"/"},{img : categori_6 , categoriName : "Electronics & Tech" ,link:"/"},{img : categori_7 , categoriName : "Food & Beverage" ,link:"/"},{img : categori_8 , categoriName : "Footwear" ,link:"/"},{img : categori_9 , categoriName : "Garden & Patio" ,link:"/"},{img : categori_10 , categoriName : "Gift Cards" ,link:"/"},{img : categori_11, categoriName : "Handmade" ,link:"/"},{img : categori_12 , categoriName : "Health & Beauty" ,link:"/"},{img : categori_13 , categoriName : "Home" ,link:"/"},{img : categori_14 , categoriName : "Industrial Tools & Products" ,link:"/"},{img : categori_15 , categoriName : "Jewelery & Watches" ,link:"/"},{img : categori_16 , categoriName : "Musical Instuments" ,link:"/"},{img : categori_17 , categoriName : "Office & School" ,link:"/"},{img : categori_18 , categoriName : "Pets &  Other Animals" ,link:"/"},{img : categori_19 , categoriName : "Sports & Outdoor Activities" ,link:"/"},{img : categori_20 , categoriName : "Tools & Handware" ,link:"/"},{img : categori_21 , categoriName : "Toys & Play" ,link:"/"}]
    
  return (
  <>
    {close && <div className="categories" >
        <div className="categories-left">
            <p>SHOP NOW</p>
            <h3>Shop<br />everything<br />you need<br />online</h3>
        </div>
        <div className="categories-right">
            <p>
                <span>ALL DEPARTMANS</span>    
                <label htmlFor="close-btn"><AiOutlineClose size={32} /></label>
            </p>            
            <div className="categories-list">
                {imageList.map((item)=>(
                    <Link href={item.link} className="list-item" key={item.categoriName} onClick={()=>setClose(!close)}>
                        <Image src={item.img} alt={item.categoriName} />
                        <span>{item.categoriName}</span>
                    </Link> 
                ))}
                {/* <Link href={"/categories"} className="list-item" onClick={()=>setClose(!close)}>
                    <p>See All Categories</p>
                    <HiArrowNarrowRight size={25} />   
                </Link>         */}
            </div>
        </div>        
    </div>}
  </>
  )
}

export default Categories
