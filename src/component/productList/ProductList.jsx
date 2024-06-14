import React from 'react'
import ProductCard from '../productCard/ProductCard'

const ProductList = ({products}) => {
  return (
    <div className="grid grid-cols-4 gap-1">
        {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList