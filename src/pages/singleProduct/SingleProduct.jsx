import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../singleProduct/SingleProduct.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/footer/Footer';

const API_URL = 'https://dummyjson.com/products'

function SingleProduct() {
    const [product, setProduct] = useState([])
    const id = useParams();
    
    useEffect(() => {
      window.scrollTo(0,0)
    },[])

      useEffect(() => {
        axios
        .get(`${API_URL}/${id.id}`)
        .then(res=> setProduct(res.data))
        .catch(res=> console.log(res))
    },[])
  return (
    <div className='sinpro'>
        <Navbar/>
        <div className='sing'>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleProduct