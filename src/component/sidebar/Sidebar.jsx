import React, { useState } from 'react'
import { images } from '../images';

const Sidebar = ({ isOpen, category, onClose }) => {
    const subcategories = {
        women: [
            { name: 'Tops', image: images.womenTop1},
            { name: 'Dresses', image:  images.womenDress2},
            { name: 'Outerwear', image: images.womenOutwear},
            { name: 'Bottoms', image: images.womenBottom1},
            { name: 'Activewear', image: images.womenactivewear},
            { name: 'Suiting', image: images.womenSuit},
            { name: 'Swim', image: images.womenSwim},
            { name: 'Underwear', image: images.womenUnderwear1},
        ],
        men: [
            { name: 'Tops', image: images.menTop1 },
            { name: 'Outerwear', image: images.menOutwear },
            { name: 'Bottoms', image: images.menBottom1},
            { name: 'Activewear', image: images.menActivewear1 },
            { name: 'Suiting', image: images.menSuit1},
            { name: 'Swim', image: images.menSwim1},
            { name: 'Underwear', image: images.menUnderwear1 },
        ],
        underwear: [
            { name: 'Women', image: images.womenUnderwear2},
            { name: 'Men', image: images.menUnderwear2},
        ],
    };

    const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
    return (
        <div className={`fixed inset-0 z-50 flex ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
            <div className="fixed inset-0 bg-white opacity-80" onClick={onClose}></div>
            <div className={`relative flex-1 max-w-3xl w-full bg-black text-white p-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
                <div className='flex justify-between py-5'>
                    <div className='space-x-7 text-sm font-medium'>
                    <button className={`hover:border-b transition-all ${category === 'women' ? 'border-b' : ''}`} onClick={() => setHoveredSubcategory(null)}>Women</button>
                    <button className={`hover:border-b transition-all ${category === 'men' ? 'border-b' : ''}`} onClick={() => setHoveredSubcategory(null)}>Men</button>
                    <button className={`hover:border-b transition-all ${category === 'underwear' ? 'border-b' : ''}`} onClick={() => setHoveredSubcategory(null)}>Underwear</button>
                    </div>
                    <img src={images.cancel} alt="" className='size-6' onClick={onClose} />
                </div>
                <h2 className="text-sm font-semibold my-8 capitalize">Shop {category}</h2>
                <div className='flex justify-between'>
                <ul className="space-y-6">
                    {subcategories[category]?.map((sub, index) => (
                        <li key={index} className="hover:underline flex items-center text-3xl text-neutral-400 hover:text-white"
                            onMouseEnter={() => setHoveredSubcategory(sub)}
                            onMouseLeave={() => setHoveredSubcategory(null)}>
                            <a href="#" >{sub.name}</a>
                        </li>   
                    ))}
                </ul>
                <div className="w-2/3  flex px-10 transition-all duration-300">
                    {hoveredSubcategory && (
                        <img src={hoveredSubcategory.image} alt={hoveredSubcategory.name} className="w-full h-[460px] object-cover" />
                    )}
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar