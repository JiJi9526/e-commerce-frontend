import React from 'react'
import CategoryCard from '../component/women/CategoryCard'
import { images } from '../component/images'

const Women = () => {
  return (
    <div className='max-w-1360px mx-auto'>
        <p className='text-sm'>Women</p>
        <p className='text-2xl font-medium my-3'>Women's Clothing</p>
        <section className='flex justify-between py-3'>
            <CategoryCard
            categoryImg={images.womentop}
            categoryName={"Tops"}/>

            <CategoryCard
            categoryImg={images.womendress}
            categoryName={"Dresses"}/>

            <CategoryCard
            categoryImg={images.womenactivewear}
            categoryName={"Activewears"}/>

            <CategoryCard
            categoryImg={images.womenSuit}
            categoryName={"Suitings"}/>

            <CategoryCard
            categoryImg={images.womenUnderwear}
            categoryName={"Underwears"}/>
        </section>
        <section className='grid grid-cols-4'>
          <div className='col-span-1'>

          </div>
        </section>
    </div>
  )
}

export default Women