import React from 'react'
import { images } from '../images'
import { Item } from '../item/Item'

export const Cart = ({rightSidebarOpen, setRightSidebarOpen}) => {
  return (
    // <div className='fixed top-0 right-0 bg-black h-full w-[35%] text-white py-10 px-10'>
    <div className={`fixed top-0 transform transition-all duration-500 ease-in-out ${rightSidebarOpen ? 'right-0' : '-right-full'} bg-black h-full w-[35%] text-white py-10 px-10 z-[110]`}>
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-[24px]'>Shopping Bag</h2>
            {/* <button>X</button> */}
            <button className="text-white w-8 h-8 rounded-full focus:outline-none transition duration-200 ease-in-out transform hover:scale-150" onClick={() => setRightSidebarOpen(!rightSidebarOpen)}>X</button>
        </div>
        <p>You have no items in your bag.</p>

        <div className='h-[550px] my-6 overflow-auto scrollbar-hidden hover:scrollbar-auto'>
           <Item img={images.men2}/>
           <Item img={images.men2}/>
           <Item img={images.men2}/>
           <Item img={images.men2}/>
           <Item img={images.men2}/>
           <Item img={images.men2}/>
        </div>

        <div className='fixed w-[460px] bottom-0 border-t-2 py-4 border-gray-500'>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-4'>
                    <h2>Subtotal</h2>
                    <h2>0 Items</h2>
                </div>
                <h2>$0</h2>
            </div>

            <input className='w-full my-4 py-4 rounded-md text-center hover:bg-slate-200 placeholder-black' type="text" placeholder="Review + Checkout" />
            <p className='text-center'>Shipping & Taxes Calculated at Checkout</p>
        </div>

    </div>
  )
}
