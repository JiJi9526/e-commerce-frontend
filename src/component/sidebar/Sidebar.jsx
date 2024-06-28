import React, { useEffect, useState } from 'react'
import { images } from '../images';
import { Link } from "react-router-dom";
import axios from 'axios';

const Sidebar = ({ isOpen, gender, onClose }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            const apiGetCategory = 'http://localhost:8080/categories'
            try {
                const response = await axios.get(apiGetCategory);
                console.log(response.data);
                const categories = response.data;

                let filteredCategories = [];

                switch (gender) {
                    case 'women':
                        filteredCategories = categories.filter(cate => cate.gender === 'women');
                        break;
                    case 'men':
                        filteredCategories = categories.filter(cate => cate.gender === 'men');
                        break;
                    default:
                        filteredCategories = [];
                }
                setCategories(filteredCategories);
            } catch (error) {
                console.log(error);
            }
        }
        getCategory();
    }, [gender]);

    const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
    // const subcategories = {
    //     women: [
    //         { name: 'Tops', image: images.womenTop1},
    //         { name: 'Dresses', image:  images.womenDress2},
    //         { name: 'Outerwear', image: images.womenOutwear},
    //         { name: 'Bottoms', image: images.womenBottom1},
    //         { name: 'Activewear', image: images.womenactivewear},
    //         { name: 'Suiting', image: images.womenSuit},
    //         { name: 'Swim', image: images.womenSwim},
    //         { name: 'Underwear', image: images.womenUnderwear1},
    //     ],
    //     men: [
    //         { name: 'Tops', image: images.menTop1 },
    //         { name: 'Outerwear', image: images.menOutwear },
    //         { name: 'Bottoms', image: images.menBottom1},
    //         { name: 'Activewear', image: images.menActivewear1 },
    //         { name: 'Suiting', image: images.menSuit1},
    //         { name: 'Swim', image: images.menSwim1},
    //         { name: 'Underwear', image: images.menUnderwear1 },
    //     ],
    //     underwear: [
    //         { name: 'Women', image: images.womenUnderwear2},
    //         { name: 'Men', image: images.menUnderwear2},
    //     ],
    // };
    return (
        <div className={`fixed inset-0 z-50 flex ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-200`}>
            <div className="fixed inset-0 bg-white opacity-80" onClick={onClose}></div>
            <div className={`relative flex-1 max-w-3xl w-full bg-black text-white p-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
                <div className='flex justify-between py-6 mb-4'>
                    <div className='space-x-7 text-sm font-medium'>
                        <button className={`border-b transition-all`}>{gender}</button>
                    </div>
                    <img src={images.cancel} alt="" className='size-6' onClick={onClose} />
                </div>
                <Link to={`/${gender}`} className="text-sm font-semibold capitalize" onClick={() => onCategorySelect(null)}>Shop {gender}</Link>
                <div className='flex justify-between'>
                    {/* <ul className="space-y-6 pt-8">
                        {categories.map((cate, id) => (
                            <li key={id} className="hover:underline flex items-center text-3xl text-neutral-400 hover:text-white"
                                onMouseEnter={() => setHoveredSubcategory(cate)}
                                onMouseLeave={() => setHoveredSubcategory(null)}
                                onClick={() => onCategorySelect(cate.id)}>
                                <Link to={`/${gender}`}>{cate.name}</Link>
                            </li>
                        ))}
                    </ul> */}
                    {/* <div className="w-2/3  flex px-10 items-center justify-center transition-opacity duration-300">
                        {hoveredSubcategory && (
                            <img src={hoveredSubcategory.image} alt={hoveredSubcategory.name} className="w-full h-[460px] object-cover" />
                        )}
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Sidebar