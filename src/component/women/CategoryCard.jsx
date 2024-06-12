import React from 'react'
import { Link } from "react-router-dom";

const CategoryCard = ({categoryImg,categoryName}) => {
  return (
    <div className=' relative'>
        <Link>
            <img src={categoryImg} alt="" className='rounded-md h-80 w-64'/>
            <p className='absolute left-3 bottom-3 text-gray-100 tracking-wide font-semibold'>{categoryName}</p>
        </Link>
    </div>
  )
}

export default CategoryCard