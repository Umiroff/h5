import React from 'react'
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import '../products/Products.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLiked } from '../../context/likedSlice';


function Products({data, title}) {
    const dispatch = useDispatch()
    let liked = useSelector(state => state.liked.value)
    

    let products = data?.map((el) => <div key={el.id} className='card'>
        <img src={el.thumbnail} alt="" />
        <h2>{el.title}</h2>
        <h3>$ {el.price}</h3>
        <button onClick={() => dispatch(toggleLiked(el))}>
            {
                liked.some(l => l.id === el.id) ? 
                <FaHeart className='like_icon'/>
                : <FaRegHeart className='like_icon'/>
            }
        </button>
    </div>)
    
  return (
    <>
    <h2 className='pro_title'>{title}</h2>
    <div className='products'>
        {products}
    </div>
    </>
  )
}

export default Products