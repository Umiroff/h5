import React from 'react'
import '../banner/Banner.css'
import banImg from '../../assets/bannerphoto.svg'
import banback from '../../assets/banback.svg'

function Banner() {
  return (
    <div className='banner'>
        <p className='banner_p'>Categories</p>
        <h2>Enhance Your Music Experience</h2>
        <div className='ban_time'>
            <div><p>23</p></div>
            <div><p>05</p></div>
            <div><p>58</p></div>
            <div><p>35</p></div>
        </div>
        <button>Buy Now</button>
        <img src={banImg} alt="" className='ban_img'/>
        <img src={banback} alt="" className='ban_back'/>
    </div>
  )
}

export default Banner