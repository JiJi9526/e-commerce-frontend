import React from 'react'

const CategoryCard = ({categoryImg,categoryName, onClick}) => {
  return (
    <div onClick={onClick} className=' relative cursor-pointer'>
            <img src={categoryImg} alt="" className='rounded-md h-[360px] w-[265px]'/>
            <p className='absolute left-4 bottom-4 text-white text-xs tracking-wide font-semibold'>{categoryName}</p>
    </div>
  )
}

export default CategoryCard