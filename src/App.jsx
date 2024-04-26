import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Liked from './pages/liked/Liked'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Cart from './pages/cart/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Liked/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
      </Routes>
    </>
  )
}

export default App
