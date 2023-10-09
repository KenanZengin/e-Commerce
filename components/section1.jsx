import Image from "next/image"
import Link from "next/link"

import {AiOutlineFieldTime} from "react-icons/ai"
import {BsPlayCircle,BsFillStarFill} from "react-icons/bs"
import {FiArrowUpRight} from "react-icons/fi"
import product from "public/img/sections/product2.png"
import videoImg from "public/img/sections/video.png"
import user_1 from "public/img/sections/random_user1.jpg"
import user_2 from "public/img/sections/random_user2.jpg"
import user_3 from "public/img/sections/random_user4.jpg"

const Section_1 = () => {
  return (
    <div className='section_1'>
      <div className="section_1_content">
        <input type="text" id="close_categori" />
        
        <div className="title">
            <div className="video">
              <Image src={videoImg} alt="videoImg" placeholder="blur" />
              <BsPlayCircle size={40} />
              <p>
                <span>Why shop</span> <br />
                on Rivly?
              </p>
            </div>
            <h1>
              Shop everything you need <br /> online from the US <br />businesses 
               <span> you love</span>
            </h1>
            <div className="products">
              <Image src={product} />
            </div>
            <p className="on_sale">And for a limited time only...</p>
        </div>
        <div className="info">
          <div className="left">
            <div className="stars">
              <BsFillStarFill size={20} />
              <BsFillStarFill size={20} />
              <BsFillStarFill size={20} />
              <BsFillStarFill size={20} />
              <BsFillStarFill size={20} />
            </div>
            <div className="reviews">
              <p>+15K</p>
              <span>Product Reviews</span>
            </div>
            <div className="trust">
              Real identity- <br />
              verified reviews <br />
              you can trust
            </div>
          </div>
          <div className="middle">
              <div className="top">
                <Link href={"/"}>
                  Join the Rivly United for FREE
                  <FiArrowUpRight size={25} />
                </Link>
                <Link href={"/"}>
                  <span>Shop all products</span>
                </Link>
              </div>
              <div className="bottom">
                <div className="box">
                  <p>Quality <br />products from <br />local businesses</p>
                </div>
                <div className="box">
                  <div className="users">
                    <Image src={user_1} alt="user" />
                    <Image src={user_2} alt="user" />
                    <Image src={user_3} alt="user" />
                    <span>
                      +5k
                    </span>
                  </div>
                  <p>
                    5,000+ 
                    <span>Certified Brands</span>
                  </p>
                  
                </div>
                <div className="box">
                  <p>
                    <span>
                    10%+
                    </span>
                    Up to 10% back on <br /> all purchases
                  </p>
                 
                  <p>
                    <AiOutlineFieldTime size={50} /><br />
                    Free, fast, and <br /> reliable shipping 
                  </p>
                </div>
              </div>
          </div>
          <div className="right">
            <div className="trust">See how Rivly selelrs compare to sites like Amazon, Etsy, and others</div>
            <p className="learn">
              <span>
                Learn more
              </span>
              
              <FiArrowUpRight size={13} />
              
            </p>
          </div>
        </div>
     
      </div>
    </div>
  )
}

export default Section_1  