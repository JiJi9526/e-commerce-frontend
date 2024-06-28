import React, { useContext } from 'react'
import ReviewItem from '../component/reviewItem/ReviewItem'
import { CartContext } from '../component/cardContext/CartContext';

const Review = () => {
    const { cart } = useContext(CartContext);
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-3 py-8 gap-x-20 mb-10'>
                <div className='col-span-2 pr-10'>
                    <h2 className='text-3xl font-medium mb-8'>Shopping Bag <span className='text-sm text-neutral-500'>({itemCount} items)</span></h2>
                    {cart.map(item => (
                        <ReviewItem key={item.id} item={item} />
                    ))}
                </div>
                <div className='col-span-1 space-y-4'>
                    <h2 className='text-[26px] font-medium pb-3'>Order Summary</h2>
                    <div className='flex justify-between text-sm'>
                        <p className='font-medium'>Subtotal</p>
                        <p>${subtotal}</p>
                    </div>
                    <div className='flex justify-between text-sm'>
                        <p className='font-medium'>Shipping</p>
                        <p>$8</p>
                    </div>
                    <div className='flex justify-between text-sm pb-2'>
                        <p className='font-medium'>Tax</p>
                        <p>Calculated in Checkout</p>
                    </div>
                    <div className='flex justify-between border-t font-medium py-3'>
                        <p>Estimated Total</p>
                        <p>${(parseFloat(subtotal) + 8).toFixed(2)}</p>
                    </div>

                    <button className='w-full bg-black rounded-sm text-white py-4 font-semibold '>Go to Checkout</button>
                    <div className='text-neutral-500 text-sm text-center font-medium'>
                    <p>100% Authentic Calvin Klein</p>
                    <p>Need Help? Call Customer Support 866.513.0513</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review