import React, { useState } from 'react'
import ProductCard from '../component/productCard/ProductCard'
import Sort from '../component/sort/Sort'
import CategoryCard from '../component/category/CategoryCard'
import { images } from '../component/images'

const Underwear = () => {
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
            categoryImg={images.womenUnderwear4}
            categoryName="Women"
            onClick={() => handleCategoryChange("Women")} />

          <CategoryCard
            categoryImg={images.womemUnderwear5}
            categoryName="Panties"
            onClick={() => handleCategoryChange("Women")} />

          <CategoryCard
            categoryImg={images.womenUnderwear6}
            categoryName={"Bralettes"}
            onClick={() => handleCategoryChange("Women")} />

          <CategoryCard
            categoryImg={images.menUnderwear3}
            categoryName={"Men"}
            onClick={() => handleCategoryChange("Men")} />

          <CategoryCard
            categoryImg={images.menUnderwear4} 
            categoryName={"Men"}
            onClick={() => handleCategoryChange("Men")} />
        </section>
      </div>
      <section>
        <div className='py-5 mb-3 max-w-1360px mx-auto'>
          <Sort onSortChange={handleSortChange} />
        </div>

        <div className=''>
          <div className=''>
            <ProductCard category={category} sortOrder={sortOrder} gender={"underwear"} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Underwear