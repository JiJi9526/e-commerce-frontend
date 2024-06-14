import React from 'react'
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return (
    <div className=''>
        <Link><img src={product.img} alt="" className="w-96 h-[490px]"/></Link>
        <div className='p-4'>
        <Link>{product.title}</Link>
        <p>{product.price}</p>
        <div className="flex space-x-1 mt-2">
          {product.colors.map((color, index) => (
            <div key={index} className={`w-6 h-6 rounded-full border-2 ${color.borderClass}`}></div>
          ))}
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center ">
            {'★'.repeat(product.rate)}
            {'☆'.repeat(5 - product.rate)}
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductCard