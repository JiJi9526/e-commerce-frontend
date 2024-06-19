import React from 'react'

const Sort = ({ onSortChange }) => {
  return (
    <div>
        <div className="flex justify-end">
                <div className="space-x-2">
                    <label
                        className="text-[#929292] text-xs  my-auto"
                    >
                        Sort By
                    </label>
                    <select
                        className="bg-transparent focus:outline-none rounded-full border border-gray-300 hover:border-gray-700 px-3 py-2  text-sm tracking-tighter"
                        name="sort"
                        id="sort"
                        onChange={(e) => onSortChange(e.target.value)}
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