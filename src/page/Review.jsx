import React from 'react'
import ReviewItem from '../component/reviewItem/ReviewItem'

const Review = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-3 py-8 gap-x-20 mb-10'>
                <div className='col-span-2 pr-10'>
                    <h2 className='text-3xl font-medium mb-8'>Shopping Bag <span className='text-sm text-neutral-500'>(2 items)</span></h2>
                    <ReviewItem/>
                    <ReviewItem/>
                </div>
                <div className='col-span-1 space-y-4'>
                    <h2 className='text-[26px] font-medium pb-3'>Order Summary</h2>
                    <div className='flex justify-between text-sm'>
                        <p className='font-medium'>Subtotal</p>
                        <p>$59.24</p>
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
                        <p>$35.67</p>
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