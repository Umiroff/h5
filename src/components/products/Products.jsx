import React from 'react'
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import '../products/Products.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLiked } from '../../context/likedSlice';
import { Link } from 'react-router-dom';
import stars from '../../assets/threeStar.svg'
import prologo from '../../assets/ourPro.svg'
import { addToCart } from "../../context/cartSlice";


function Products({data, title, count}) {
    const dispatch = useDispatch()
    let liked = useSelector(state => state.liked.value)
    

    let products = data.slice(0, count)?.map((el) => <div key={el.id} className='card'>
        <Link to={`/product/${el.id}`}>
                <img src={el.thumbnail} alt="" className='card_img'/>
            </Link>
        <h2>{el.title}</h2>
        <h3>$ {el.price}</h3>
        <button className='card_likebtn' onClick={() => dispatch(toggleLiked(el))}>
            {
                liked.some(l => l.id === el.id) ? 
                <FaHeart className='like_icon'/>
                : <FaRegHeart className='like_icon'/>
            }
        </button>
        <img src={stars} alt="rating" className='card_stars'/>
        <button className='card_cartbtn' onClick={() => dispatch(addToCart(el))}>Add To Cart</button>
    </div>)
    
  return (
    <>
    <div className='pro'>
        <img src={prologo} alt=""/>
        <h2 className='pro_title'>{title}</h2>
        <div className='products'>
            {products}
        </div>
        <button className='pro_view'>View all products</button>
    </div>
    </>
  )
}

export default Products