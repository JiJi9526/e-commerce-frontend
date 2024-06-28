import React, { useContext } from 'react'
import { images } from '../images'
import { Item } from '../item/Item'
import { CartContext } from '../cardContext/CartContext';
import Review from '../../page/Review';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cart, isCartVisible, toggleCart } = useContext(CartContext);
    const navigate = useNavigate();

    const reviewPage = () => {
        navigate('/review')
    }
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    return (
        // <div className='fixed top-0 right-0 bg-black h-full w-[35%] text-white py-10 px-10'>
        <div className={`fixed top-0 transform transition-all duration-500 ease-in-out ${isCartVisible ? 'right-0' : '-right-full'} bg-black h-full w-[35%] text-white py-10 px-10 z-[110]`}>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-[24px]'>Shopping Bag</h2>
                {/* <button>X</button> */}
                <button className="text-white w-8 h-8 rounded-full focus:outline-none transition duration-200 ease-in-out transform hover:scale-150" onClick={toggleCart}>X</button>
            </div>
            {cart.length === 0 ? (
                <p>You have no items in your bag.</p>
            ) : (
                <div className='h-[550px] my-6 overflow-auto scrollbar-hidden hover:scrollbar-auto'>
                    {cart.map((item) => (
                        <Item key={item.id} item={item}/>
                    ))}
                </div>
            )}
            <div className='fixed bg-black w-[460px] bottom-0 border-t-2 py-4 border-gray-500'>
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-4'>
                        <h2>Subtotal</h2>
                        <h2>{itemCount} Items</h2>
                    </div>
                    <h2>${subtotal}</h2>
                </div>

                <input className='w-full cursor-pointer my-4 py-4 rounded-md text-center hover:bg-slate-200 placeholder-black' type="text" placeholder="Review + Checkout" onClick={reviewPage}/>
                <p className='text-center'>Shipping & Taxes Calculated at Checkout</p>
            </div>

        </div>
    )
}
