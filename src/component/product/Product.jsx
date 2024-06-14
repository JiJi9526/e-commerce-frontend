import React from 'react'
import { images } from '../images';
import ProductList from '../productList/ProductList';

const products = [
    {
      id: 1,
      img: images.women1,
      title: '90s Fit Denim Shorts',
      price: '$69.00',
      colors: [
        { borderClass: 'border-black bg-black' },
        { borderClass: 'border-gray-500 bg-gray-500' },
        { borderClass: 'border-white bg-white' },
      ],
      rate: 4,
    },
    {
      id: 2,
      img: images.women4,
      title: '90s Fit Denim Shorts',
      price: '$69.00',
      colors: [
        { borderClass: 'border-black bg-black' },
        { borderClass: 'border-gray-500 bg-gray-500' },
        { borderClass: 'border-white bg-white' },
      ],
      rate: 4,
    },
    {
      id: 3,
      img: images.women3,
      title: '90s Fit Denim Shorts',
      price: '$69.00',
      colors: [
        { borderClass: 'border-black bg-black' },
        { borderClass: 'border-gray-500 bg-gray-500' },
        { borderClass: 'border-white bg-white' },
      ],
      rate: 4,
    },
    {
      id: 4,
      img: images.women1,
      title: '90s Fit Denim Shorts',
      price: '$69.00',
      colors: [
        { borderClass: 'border-black bg-black' },
        { borderClass: 'border-gray-500 bg-gray-500' },
        { borderClass: 'border-white bg-white' },
      ],
      rate: 4,
    },
    {
      id: 3,
      img: images.women3,
      title: '90s Fit Denim Shorts',
      price: '$69.00',
      colors: [
        { borderClass: 'border-black bg-black' },
        { borderClass: 'border-gray-500 bg-gray-500' },
        { borderClass: 'border-white bg-white' },
      ],
      rate: 5,
    },
    {
      id: 3,
      img: images.women2,
      title: '90s Fit Denim Shorts',
      price: '$69.00',
      colors: [
        { borderClass: 'border-black bg-black' },
        { borderClass: 'border-gray-500 bg-gray-500' },
        { borderClass: 'border-white bg-white' },
      ],
      rate: 4,
    },
  ];

const Product = () => {
  return (
    <div className="">
      <ProductList products={products} />
    </div>
  )
}

export default Product