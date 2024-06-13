import React from 'react'
import { Link } from "react-router-dom";

const CategoryCard = ({categoryImg,categoryName}) => {
  return (
    <div className=' relative'>
        <Link>
            <img src={categoryImg} alt="" className='rounded-md h-[360px] w-[265px]'/>
            <p className='absolute left-4 bottom-4 text-white text-xs tracking-wide font-semibold'>{categoryName}</p>
        </Link>
    </div>
  )
}

export default CategoryCard