"use client"
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel';
import {FaShoppingCart} from "react-icons/fa"
import carousel2 from 'public/img/carousel2.png'
import carousel3 from 'public/img/carousel3.png'
import carousel4 from 'public/img/carousel4.png'

const CarouselHomePage = () => {
  return (
    <div className='home_carousel'>
      <div className="carousel-cards">
        <Carousel  data-bs-theme="dark">
          <Carousel.Item>
            <div className="cart">
              <div className="left">
                <h3>
                  New Year Sale <br />
                  Offer 2024
                </h3>
                <p>20% OFF</p>
                <Link href={"/"}>
                  <FaShoppingCart size={17} />
                  Start Shopping
                </Link>
              </div>
              <div className="right">
                <Image src={carousel2} alt="earphones" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cart">
              <div className="left">
                <h3>
                  New Year Sale <br />
                  Offer 2024
                </h3>
                <p>20% OFF</p>
                <Link href={"/"}>
                  <FaShoppingCart size={17} />
                  Start Shopping
                </Link>
              </div>
              <div className="right">
                <Image src={carousel3} alt="earphones" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cart">
              <div className="left">
                <h3>
                  New Year Sale <br />
                  Offer 2024
                </h3>
                <p>20% OFF</p>
                <Link href={"/"}>
                  <FaShoppingCart size={17} />
                  Start Shopping
                </Link>
              </div>
              <div className="right">
                <Image src={carousel4} alt="earphones" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselHomePage