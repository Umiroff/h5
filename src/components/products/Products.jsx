import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import '../products/Products.css'


function Products({data}) {

    let products = data?.map((el) => <div key={el.id} className='card'>
        <img src={el.thumbnail} alt="" />
        <h2>{el.title}</h2>
        <h3>$ {el.price}</h3>
        <button><FaRegHeart/></button>
    </div>)
    
  return (
    <>
    <h2 className='pro_title'>Explore Our Products</h2>
    <div className='products'>
        {products}
    </div>
    </>
  )
}

export default Products