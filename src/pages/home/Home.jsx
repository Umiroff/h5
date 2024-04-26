import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../home/Home.css'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import axios from '../../api'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner'

function Home() {
  const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/products/?limit=8')
        .then(res => setData(res.data.products))
        .catch(res => console.log(res))
    },[])
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Banner/>
        <Products count={8} title={'Explore Our Products'} data={data}/>
        <Footer/>
    </div>
  )
}

export default Home