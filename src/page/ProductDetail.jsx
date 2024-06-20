import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { images } from '../component/images'
import axios from 'axios';

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const colors = ['Black', 'White']
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  console.log(id);

  useEffect(() => {
    const fetchProduct = async() => {
      try {
        const response = await axios.get(`http://localhost:8080/products/${id}`)
        console.log(response.data);
        setProduct(response.data.product);
      } catch(error) {
        console.log(error);
      }
    };
    fetchProduct();
    
  },[id]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  if(!product){
    return <div>Loading...</div>
  }
  return (
    <div className='max-w-1360px mx-auto'>
      <div className='py-5'>
        <Link to={"/women"} className='hover:border-b hover:text-black border-black text-neutral-600 text-sm'>Women</Link>
        <div className='grid grid-cols-3 gap-x-2 py-3'>
          <div className='col-span-2 flex gap-x-4'>
            <img src={product.imageUrl} alt="" className='w-[430px] h-[560px]' />
            <img src={product.imageUrl} alt="" className='w-[430px] h-[560px]' />
          </div>
          <div className='col-span-1 space-y-2'>
            <p className='text-2xl font-medium'>{product.name}</p>
            <p className='font-medium'>${product.price}</p>
            <div className='py-4'>
              <p className='text-sm text-neutral-600 pb-5'>Color
                <span className='font-medium pl-2 text-black'>{selectedColor}</span>
              </p>
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorClick(color)}
                  className={`size-8 rounded-full mr-6 border-2 hover:outline outline-1 outline-offset-2 ${selectedColor === color ? 'outline outline-black' : 'border-gray-300'}`}
                  style={{ backgroundColor: color === 'Black' ? '#000' : '#f5f5f5' }} />
              ))}
            </div>

            <div>
              <p className='text-sm text-neutral-600'>Select Size</p>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`py-4 text-center rounded-sm border hover:border-black mt-2 ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p className='text-sm py-3 underline-offset-4 font-medium underline'>About the {product.name}</p>
            <p className='text-xl'>{product.description}</p>

            <div className=" ">

              <button className="w-full bg-black text-white py-3 mt-2">
                Add to Bag - ${product.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail