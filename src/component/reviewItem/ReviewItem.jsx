import React from 'react'
import { images } from '../images'

const ReviewItem = () => {
  return (
    <div className='border-y border-zinc-300'>
        <div className='py-6 flex'>
            <img src={images.menActivewear1} alt="" className='w-40 h-48'/>
            <div className='pl-6'>
                <p className='font-medium text-lg hover:underline cursor-pointer'>Product name</p>
                <p className='text-neutral-500 font-medium'>color | size</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewItem