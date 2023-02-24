import React from 'react'
import './App.css'
import Footer from './components/Structures/Footer/Footer'
import Navbar from './components/Structures/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import Favorrites from './components/Pages/Favorites/Favorites'
import Products from './components/Pages/Status/Products'
import History from './components/Pages/History/History'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Register/Register'


const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/favorites' element={<Favorrites />} />
        <Route path='/products' element={<Products />} />
        <Route path='/history' element={<History />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App



