import React from 'react'
import CategoryCard from '../component/women/CategoryCard'
import { images } from '../component/images'
import Sort from '../component/sort/Sort'

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
            categoryImg={images.womenBottom}
            categoryName={"Bottoms"}/>

            <CategoryCard
            categoryImg={images.womenUnderwear}
            categoryName={"Underwears"}/>
        </section>
        
        <section>
        <div className='mb-5'>
          <Sort/>
        </div>
        <div className='grid grid-cols-4 space-x-2'>
          <div className='col-span-1'>

          </div>
          <div className='col-span-3'>

          </div>
        </div>
        </section>
    </div>
  )
}

export default Women