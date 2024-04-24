import React from 'react'
import '../hero/Hero.css'
import back from '../../assets/hero-back.svg'
import apple from '../../assets/apple.svg'

function Hero() {
  return (
    <>
    <div className='hero'>
        <ul>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>

        <div className='hero_main'>
            <img src={apple} alt="" className='hero_main_apple'/>
            <p>iPhone 14 Series</p>
            <h2>Up to 10% off Voucher</h2>
            <a href="">Shop Now</a>
            <img src={back} alt="" className='hero_main_back'/>
        </div>   
    </div>
    </>
  )
}

export default Hero