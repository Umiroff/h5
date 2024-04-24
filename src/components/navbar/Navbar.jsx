import React from 'react'
import '../navbar/Navbar.css'
import { FaRegHeart, FaSearch  } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <div className='nav'>
        <div className='nav_top'>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href="">Shop now</a>
            <select name="" id="">
                <option value="English">English</option>
                <option value="Uzbek">Uzbek</option>
            </select>
        </div>

        <div className='nav_main'>
            <h2>Exclusive</h2>
            <ul>
                <Link to={'/'}>
                <li>Home</li>
                </Link>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
            <form action="">
                <input type="text" placeholder='what are you looking for?'/>
                <FaSearch className='nav_icon1'/>
            </form>
            <Link to={'/favorites'}>
                <FaRegHeart className='nav_icon2'/>
            </Link>
            <FiShoppingCart className='nav_icon3'/>
        </div>
    </div>
    </>
  )
}

export default Navbar