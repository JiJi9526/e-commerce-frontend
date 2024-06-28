import React from 'react'
import { images } from '../images'

const ReviewItem = ({ item }) => {
  return (
    <div className='border-y border-zinc-300'>
      <div className='py-6 flex'>
        <img src={item.imageUrl} alt={item.name} className='w-40 h-48' />
        <div className='pl-6'>
          <div>
          <p className='font-medium text-lg hover:underline cursor-pointer'>{item.name}</p>
          <p className='text-neutral-500 font-medium'>{item.color} | {item.size}</p>
          </div>
          <div className=' space-y-1'>
          <p className='font-medium'>Qty: {item.quantity}</p>
          <p className='font-medium'>${item.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem