import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Liked from './pages/liked/Liked'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Liked/>}/>
      </Routes>
    </>
  )
}

export default App
