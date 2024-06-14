import React from 'react'
import CategoryCard from '../component/women/CategoryCard'
import { images } from '../component/images'
import Sort from '../component/sort/Sort'
import Product from '../component/product/Product'

const Women = () => {
  return (
    <div>
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
        </div>
        <section>
        <div className='py-5 mb-3 max-w-1360px mx-auto'>
          <Sort/>
        </div>
      
        <div className=''>
          <div className=''>
            <Product />
          </div>
        </div>
        </section>
    </div>
  )
}

export default Women