import React, { useEffect } from 'react'
import '../cart/Cart.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart, decCart, incCart, removeFromCart } from '../../context/cartSlice'
import { FaRegTrashAlt } from "react-icons/fa";


function Cart() {
    let dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
      let carts = useSelector(state => state.cart.value)
      console.log(carts);
      
      let items = carts?.map((el) => <div key={el.id} className='cart1'>
        <Link to={`/product/${el.id}`}>
                <img src={el.thumbnail} alt="" className='cart1_img'/>
            </Link>
        <h3>$ {el.price * el.quantity}</h3>
        <button className='cart1_btnplus' onClick={() => dispatch(incCart(el))}>+</button>
        <h2>{el.quantity}</h2>
        <button disabled={el.quantity <= 1} className='cart1_btnminus' onClick={() => dispatch(decCart(el))}>-</button>
        <button className='cart1_btntrash' onClick={()=> dispatch(removeFromCart(el))}><FaRegTrashAlt className='trashicn'/></button>
      </div>)

  return (
    <div className='cart'>
        <Navbar/>
        {carts.length ? 
        <div className='carts'>
            {items}
            <button className='clearbtn' onClick={() => dispatch(clearCart())}>Clear All</button>
        </div>
        :
        <h2>Empty</h2>
        }
        <Footer/>
    </div>
  )
}

export default Cart