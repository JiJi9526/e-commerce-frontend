import React from 'react'
import { Link } from "react-router-dom";
import {images} from "../images";

const Header = () => {
  return (
    <div className=' hover:bg-white'>
        <div className='max-w-1360px py-5 mx-auto flex justify-between'>
            <div className='space-x-7 text-sm font-medium'>
                <Link className='hover:border-b transition-all' to="/women">Women</Link>
                <Link>Men</Link>
                <Link>Underwear</Link>
            </div>
            <div className='text-xl font-medium pr-20 tracking-wide'>
                <Link to="/">Calvin Klein</Link>
            </div>
            <div className='flex space-x-7'>
                <img src={images.search} alt="" className='size-6 cursor-pointer'/>
                <img src={images.person} alt="" className='size-6 cursor-pointer'/>
                <img src={images.cart} alt="" className='size-6 cursor-pointer'/>
            </div>
        </div>

    </div>
  )
}

export default Header