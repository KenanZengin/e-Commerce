import Link from "next/link"
import {FiSearch} from "react-icons/fi"
import { FaFire } from "react-icons/fa";


const CategoriSearch = () => {
    const categories = ["Art","Baby","Books","Car","Electronics","Food","Footwear","Garden","Gift","Home","Pets","Toys","Tools","Musical Instuments"]

  return (
    <>
    
        <label htmlFor="search">
            <FiSearch size={24} />
            <input type="text" id="search" name="search" placeholder='Search Products' />
        </label>
        <div className="search-list">
            <span className="search-list-title">Categories</span>
            <ul>
               {categories.map((item,i) => (  
                    i < 5 
                        ? 
                            <li>
                                <Link href={"/"}>
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
                    <Link href={"/"}><FaFire /> Musical Instuments</Link>
                    <Link href={"/"}><FaFire /> Tools</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoriSearch