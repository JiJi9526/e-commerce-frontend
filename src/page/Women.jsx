import React, { useState } from 'react'
import { images } from '../component/images'
import Sort from '../component/sort/Sort'
import ProductCard from '../component/productCard/ProductCard'
import CategoryCard from '../component/category/CategoryCard'
import Sidebar from '../component/sidebar/Sidebar'

const Women = () => {
  const [sortOrder, setSortOrder] = useState('Featured');
  const [category, setCategory] = useState('');

  const handleSortChange = (order) => {
    setSortOrder(order);
  }

  const handleCategoryChange = (categoryName) => {
    setCategory(categoryName);
  }

  return (
    <div>
      <div className='max-w-1360px mx-auto'>
        <p className='text-sm'>Women</p>
        <p className='text-2xl font-medium my-3'>Women's Clothing</p>
        <section className='flex justify-between py-3'>
          <CategoryCard
            categoryImg={images.womentop}
            categoryName="Tops"
            onClick={() => handleCategoryChange("Tops")} />

          <CategoryCard
            categoryImg={images.womenDress}
            categoryName="Dresses"
            onClick={() => handleCategoryChange("Dresses")} />

          <CategoryCard
            categoryImg={images.womenactivewear}
            categoryName={"Activewears"}
            onClick={() => handleCategoryChange("Activewear")} />

          <CategoryCard
            categoryImg={images.womenBottom}
            categoryName={"Bottoms"}
            onClick={() => handleCategoryChange("Bottoms")} />

          <CategoryCard
            categoryImg={images.womenUnderwear} n
            categoryName={"Underwears"}
            onClick={() => handleCategoryChange("Underwear")} />
        </section>
      </div>
      <section>
        <div className='py-5 mb-3 max-w-1360px mx-auto'>
          <Sort onSortChange={handleSortChange} />
        </div>

        <div className=''>
          <div className=''>
            <ProductCard sortOrder={sortOrder} gender={"women"} category={category}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Women