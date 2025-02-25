import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Fight from './pages/fight/fight'
import Buy from './pages/buy/buy'
import Trak from './pages/trak/trak'
import Login from './pages/login/login'
import Product from './pages/product/product'
import Like from './pages/like/Like'
import Korzina from './pages/korzina/korzina'
import Form from './components/form/form'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fight" element={<Fight/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/trak' element={<Trak/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/korzina' element={<Korzina/>}/>
        <Route path='/form' element={<Form/>}/>
        
      </Routes>

    </div>
  )
}

export default App