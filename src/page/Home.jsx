import React, { useEffect, useState } from 'react'
import { images } from '../component/images'
import { Link } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState('women');
  const womenItems = ['Swim', 'Outerwear', 'Top', 'Bottom'];
  const menItems = ['Swim', 'Outerwear', 'Top', 'Bottom'];
  const items = category === 'women' ? womenItems : menItems;
  return (
    <>
    <main className='bg-orange-50'>
      <div className='space-y-2'>
        <section className='grid grid-cols-3 space-x-2 '>
          <div className=' col-span-2'>
            <Link><img src={images.women} alt="" className='w-full hover:brightness-75' /></Link>
          </div>
          <Link>
            <div className=' col-span-1 space-y-2'>
              <img src={images.women1} alt="" className='w-full hover:brightness-75' />
              <img src={images.women2} alt="" className='hover:brightness-75' />
            </div>
          </Link>
        </section>
        <section className='grid grid-cols-3 space-x-2'>
          <div className='col-span-1 space-y-2'>
            <Link><img src={images.men1} alt="" className='hover:brightness-75'/></Link>
          </div>
          <div className='col-span-2'>
            <Link><img src={images.men} alt="" className='hover:brightness-75'/></Link>
          </div>
        </section>
        <section className='relative'>
          <Link><img src={images.underwear} alt="" className='w-full hover:brightness-75' /></Link>
          <div className='absolute bottom-7 left-9'>
            <p className="text-5xl pb-5">Bestselling Underwear</p>
              <a href="" className='mr-7 border-b border-gray-200 hover:border-black'>Shop Women</a>
              <a href="" className='border-b border-gray-200 hover:border-black'>Shop Men</a>
          </div>
        </section>
      </div>
      <div className='flex items-center justify-center py-24'>
        <div className='text-center'>
          <div className='mb-6 text-lg'>
            <button
              onClick={() => setCategory('women')}
              className={`mr-6 focus:underline  ${category === 'women' ? 'text-black' : 'text-gray-500'}`}>
              Women
            </button>
            <button
              onClick={() => setCategory('men')}
              className={`focus:underline ${category === 'men' ? 'text-black' : 'text-gray-500'}`}
            >
              Men
            </button>
          </div>
          <ul className="space-y-8">
            {items.map((item, index) => (
              <li key={index} className="text-5xl font-normal"><button className='hover:underline'>{item}</button></li>
            ))}
          </ul>
        </div>
      </div>
    </main>
    </>
  )
}

// home page

export default Home