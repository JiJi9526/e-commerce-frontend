import React from 'react'

const ProductCard = ({productImg,productName,price,color,rate}) => {
  return (
    <div className='col-span-1'>
        <Link><img src={productImg} alt="" /></Link>
        <Link>{productName}</Link>
        <p>{price}</p>
        <p></p>
    </div>
  )
}

export default ProductCard