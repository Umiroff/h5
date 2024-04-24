import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../liked/Liked.css'
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux'

function Liked() {
    let liked = useSelector(state => state.liked.value)
  return (
    <>
    <div className='liked'>
        <Navbar/>
        {liked.length ? 
        <Products title={'Wishlist'} data={liked}/>
        :
        <h2>Empty</h2>
        }
    </div>
    </>
  )
}

export default Liked