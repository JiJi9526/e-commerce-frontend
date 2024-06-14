import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { images } from "../images";
import Sidebar from '../sidebar/Sidebar';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        setActiveCategory('');
    };
    return (
        <div className=' hover:bg-white'>
            <div className='max-w-1360px py-5 mx-auto flex justify-between'>
                <div className='space-x-7 text-sm font-medium'>
                    <button onClick={() => handleCategoryClick('women')} className={`hover:border-b transition-all ${activeCategory === 'women' ? 'border-b' : ''}`}>Women</button>
                    <button onClick={() => handleCategoryClick('men')} className={`hover:border-b transition-all ${activeCategory === 'men' ? 'border-b' : ''}`}>Men</button>
                    <button onClick={() => handleCategoryClick('underwear')} className={`hover:border-b transition-all ${activeCategory === 'underwear' ? 'border-b' : ''}`}>Underwear</button>
                </div>
                <div className='text-xl font-medium pr-20 tracking-wide'>
                    <Link to="/">Calvin Klein</Link>
                </div>
                <div className='flex space-x-7'>
                    <img src={images.search} alt="" className='size-6 cursor-pointer' />
                    <img src={images.person} alt="" className='size-6 cursor-pointer' />
                    <img src={images.cart} alt="" className='size-6 cursor-pointer' />
                </div>
                
            </div>
            <Sidebar isOpen={sidebarOpen} category={activeCategory} onClose={closeSidebar} />
        </div>
    )
}

export default Header