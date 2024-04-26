import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../liked/Liked.css'
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer'

function Liked() {
    let liked = useSelector(state => state.liked.value)
    useEffect(() => {
      window.scrollTo(0,0)
    },[])
  return (
    <>
    <div className='liked'>
        <Navbar/>
        {liked.length ? 
        <Products title={'Wishlist'} data={liked}/>
        :
        <h2>Empty</h2>
        }
        <Footer/>
    </div>
    </>
  )
}

export default Liked