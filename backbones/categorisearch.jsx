"use client"
import Link from "next/link"
import {useState} from "react"
import {FiSearch} from "react-icons/fi"
import { FaFire } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";


const CategoriSearch = () => {

    const categories = ["Art","Baby","Books","Car","Electronics","Food","Footwear","Garden","Gift","Home","Pets","Toys","Tools","Musical Instuments"]

    const [searchTerm,setSearchTerm] = useState("")
    const [searchResult,setSearchResult] = useState(categories)

    const handleSearch = (e) => {
        const userInput = e.target.value.toLowerCase()
        setSearchTerm(userInput)
    
        const results = categories.filter((item) => item.toLowerCase().includes(userInput))

        //const turkishResults = results.filter((item) => 
            //item.toLowerCase().normalize('NFC').replace(/[\u0300-\u036f]/g, '').includes(userInput)
        //)
        setSearchResult(results)
    }



  return (
    <>
    
        <label htmlFor="search">
            <FiSearch size={24} />
            <input type="text" id="search" name="search" placeholder='Search Products'  value={searchTerm} onChange={handleSearch} />
        </label>
        <div className="search-list">
            <span className="search-list-title">Categories</span>
            <label htmlFor="close2" className="close2"><IoIosClose size={30} /></label>
            <ul>
               {searchResult.map((item,i) => (  
                    i < 5 
                        ? 
                            <li key={i}>
                                <Link href={"/productPage"}>
                                    {item}
                                </Link>
                            </li>
                        :   ""  
               ))}
            </ul>
            <div className="popular">
                <span className="search-list-title">Popular Searches</span>
                <div className="popular_list">
                    <Link href={"/"}><FaFire /> Footwear</Link>
                    <Link href={"/"}><FaFire /> Pets</Link>
                    <Link href={"/"}><FaFire /> Tools</Link>
                </div>
            </div>
        </div>
        <input type="checkbox" name="close2" id="close2" className="close_2" />
    </>
  )
}

export default CategoriSearch