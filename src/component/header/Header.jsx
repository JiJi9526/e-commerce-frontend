import React, { useContext,useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { images } from "../images";
import Sidebar from '../sidebar/Sidebar';
import { Cart } from '../cart/Cart';
import ProductCard from '../productCard/ProductCard';
import { CartContext } from '../cardContext/CartContext';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeUserSidebar, setActiveUserSidebar] = useState('');
    const {toggleCart} = useContext(CartContext);
    const navigate = useNavigate();

    const handleCategoryClick = (gender) => {
        setActiveCategory(gender);
        setSidebarOpen(true);
    };

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleDropdownFunction = (action) => {
        if (action === 'signIn'){
            setActiveUserSidebar('signIn');
        } else if(action === 'createAccount'){
            navigate("/register")
        }
        setDropdownOpen(false);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
        setActiveCategory('');
    };

    const handleRightSideBar = () => {
        setRightSidebarOpen(!rightSidebarOpen);
    }
    return (
        <div className=' hover:bg-white'>
            <div className='max-w-1360px py-5 mx-auto flex justify-between'>
                <div className='space-x-7 text-sm font-medium'>
                    <button onClick={() => handleCategoryClick('women')} className={`hover:border-b transition-all ${activeCategory === 'women' ? 'border-b' : ''}`}>Women</button>

                    <button onClick={() => handleCategoryClick('men')} className={`hover:border-b transition-all ${activeCategory === 'men' ? 'border-b' : ''}`}>Men</button>
                </div>
                <div className='text-xl font-medium pr-20 tracking-wide'>
                    <Link to="/">Calvin Klein</Link>
                </div>
                <div className='flex space-x-7'>
                    <img src={images.search} alt="" className='size-6 cursor-pointer' />

                    <div className=' relative'>
                        <img src={images.person} alt=""
                            className='size-6 cursor-pointer'
                            onClick={handleDropdown} />
                        {dropdownOpen && (
                            <div className="absolute right-[-80px] mt-2 w-48 bg-black text-white py-2">
                                <button className='block px-4 py-2 text-left w-full hover:bg-gray-800' onClick={() => handleDropdownFunction('signIn')}>Sign In</button>
                                <button className='block px-4 py-2 text-left w-full hover:bg-gray-800' onClick={() => handleDropdownFunction('createAccount')}>Create Account</button>
                            </div>
                        )}
                    </div>

                    <img src={images.cart} alt="" className='size-6 cursor-pointer' onClick={toggleCart} />
                </div>
            </div>
            <Cart  />
            <Sidebar isOpen={sidebarOpen} gender={activeCategory} onClose={closeSidebar} />
        </div>
    )
}   

export default Header