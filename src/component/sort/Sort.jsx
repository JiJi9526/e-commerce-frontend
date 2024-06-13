import React from 'react'

const Sort = () => {
  return (
    <div>
        <div className="flex justify-end">
                <div className="flex-col flex">
                    <label
                        className="text-[#929292] text-xs ml-3 my-auto"
                    >
                        Sort By
                    </label>
                    <select
                        className="bg-transparent focus:outline-none px-2  text-sm tracking-tighter"
                        name="sort"
                        id="sort"
                    >
                        <option value="Featured">Featured</option>
                        <option value="LowToHigh">Price Low to High</option>
                        <option value="HighToLow">Price High to Low</option>
                    </select>
                </div>
            </div>
    </div>
  )
}

export default Sort