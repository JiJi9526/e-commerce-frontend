import React from 'react'
import {  BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from '../../page/Home'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Women from '../../page/Women'
import LogIn from '../../page/LogIn'
import Men from '../../page/Men'
import Underwear from '../../page/Underwear'
import ProductDetail from '../../page/ProductDetail'
import Review from '../../page/Review'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/women' element={<Women/>}/>
                <Route path='/men' element={<Men/>}/>
                <Route path='/underwear' element={<Underwear/>}/>
                <Route path='/products/:id' element={<ProductDetail/>}/>
                <Route path='/register' element={<LogIn/>}/>
                <Route path='/review' element={<Review/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Router