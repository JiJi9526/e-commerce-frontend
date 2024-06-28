import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { images } from '../component/images'
import axios from 'axios';
import { CartContext } from '../component/cardContext/CartContext';

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

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

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToBag = () => {
    const item = {
      ...product,
      quantity : parseInt(quantity),
    };
    addToCart(item);
  }

  if(!product){
    return <div>Loading...</div>
  }
  return (
    <div className='max-w-1360px mx-auto'>
      <div className='py-5'>
        {/* <Link to={"/women"} className='hover:border-b hover:text-black border-black text-neutral-600 text-sm'>Women</Link> */}
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
                <span className='font-medium pl-2 text-black'>{product.color}</span>
              </p>
                <button
                  className={`size-8 rounded-full mr-6 border-2 outline-1 outline-offset-2  outline outline-black`}
                  style={{ backgroundColor: product.color }} />
            </div>

            <div>
              <p className='text-sm text-neutral-600'>Size : {product.size}</p>
              <div className="grid grid-cols-4 gap-3">
                  <button
                    className={`py-4 text-center rounded-sm border border-black mt-2`}
                  >
                    {product.size}
                  </button>
              </div>
            </div>
            <p className='text-sm py-3 underline-offset-4 font-medium underline'>About the {product.name}</p>
            <p className='text-xl'>{product.description}</p>

            <div className="grid grid-cols-3 gap-x-4 pt-2">
            <div className='py-1 border px-5 flex-col flex col-span-1'>
              <label htmlFor='quantity' className='text-sm pb-2 '>Qty</label>
              <select
                id='quantity'
                value={quantity}
                onChange={handleQuantityChange}
                className='outline-none'
              >
                {[...Array(10).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
            </div>

              <button className="w-full bg-black text-white py-3 col-span-2"
              onClick={handleAddToBag}>
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