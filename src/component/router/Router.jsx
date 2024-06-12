import React from 'react'
import {  BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from '../../page/Home'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Women from '../../page/Women'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/women' element={<Women/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Router