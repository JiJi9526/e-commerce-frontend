import React, { useState } from 'react'
import Sort from '../component/sort/Sort'
import ProductCard from '../component/productCard/ProductCard'
import { images } from '../component/images'
import CategoryCard from '../component/category/CategoryCard'

const Men = () => {
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
        <p className='text-sm'>Men</p>
        <p className='text-2xl font-medium my-3'>Men's Clothing</p>
        <section className='flex justify-between py-3'>
          <CategoryCard
            categoryImg={images.menTop}
            categoryName="Tops"
            onClick={() => handleCategoryChange("Tops")} />

          <CategoryCard
            categoryImg={images.menActivewear}
            categoryName={"Activewears"}
            onClick={() => handleCategoryChange("Activewear")} />

          <CategoryCard
            categoryImg={images.menBottom}
            categoryName={"Bottoms"}
            onClick={() => handleCategoryChange("Bottoms")} />

          <CategoryCard
            categoryImg={images.menUnderwear2} n
            categoryName={"Underwears"}
            onClick={() => handleCategoryChange("Underwear")} />

          <CategoryCard
            categoryImg={images.men1}
            categoryName={"Outerwear"}
            onClick={() => handleCategoryChange("Outerwear")} />
        </section>
      </div>
      <section>
        <div className='py-5 mb-3 max-w-1360px mx-auto'>
          <Sort onSortChange={handleSortChange} />
        </div>

        <div className=''>
          <div className=''>
            <ProductCard sortOrder={sortOrder} gender={"men"} category={category}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Men