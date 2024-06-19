// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom";

// const ProductCard = ({category, sortOrder,gender}) => {
//   const [productGroups, setProductGroups] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//     try {
//     let response;
//     if (category) {
//     response = await axios.get(`http://localhost:8080/products/category/${category}`);
//     } else {
//     response = await axios.get(`http://localhost:8080/products`);
//     }
//     setProductGroups(response.data);
//     console.log(response.data);
//     }
//     catch (error) {
//     console.log(error);
//     }
//     };
//     getProducts();
//     }, [category]);



//   useEffect(() => {
//     let productsToSort = [...productGroups];

//     if (gender) {
//       productsToSort = productsToSort.filter(product => product.product.gender === gender);
//     }

//     const sortedProducts = productsToSort.sort((a, b) => {
//       if (sortOrder === 'LowToHigh') {
//         return a.product.price - b.product.price;
//       } else if (sortOrder === 'HighToLow') {
//         return b.product.price - a.product.price;
//       }
//       return 0;
//     });
//     setFilteredProducts(sortedProducts);
//   }, [sortOrder, gender, productGroups]);

//   // useEffect(() => {
//   //   let productsToSort = [...productGroups];

//   //   if (gender) {
//   //     productsToSort = productsToSort.filter(product => product.product.gender === gender);
//   //   }

//   //   const sortedProducts = productsToSort.sort((a, b) => {
//   //     if (sortOrder === 'LowToHigh') {
//   //       return a.product.price - b.product.price;
//   //     } else if (sortOrder === 'HighToLow') {
//   //       return b.product.price - a.product.price;
//   //     }
//   //     return 0;
//   //   });
//   //   setFilteredProducts(sortedProducts);
//   // }, [sortOrder, gender, productGroups]);

//   // const sortedProducts = [...productGroups].sort((a,b) => {
//   //   if (sortOrder === 'LowToHigh'){
//   //     return a.product.price - b.product.price;
//   //   }
//   //   else if (sortOrder === 'HighToLow'){
//   //     return b.product.price - a.product.price;
//   //   }
//   //   return 0;
//   // })

//   useEffect(() => {
//     if (category){
//       setFilteredProducts(productGroups.filter(product => product.categoryName === category));
//     }
//     else{
//       setFilteredProducts(productGroups);
//     }
//   }, [category, productGroups]);

//   return (
//     <div className='grid grid-cols-4 gap-1'>
//       {filteredProducts.map((group, id) => (
//         <div className='productCard' key={id}>
//           <Link><img src={group.product.imageUrl} alt="" className="w-96 h-[490px]" /></Link>
//           <div className='p-4'>
//             <Link className='text-neutral-500 text-xs font-semibold '>{group.product.name}</Link>
//             <p className='text-sm py-1'>${group.product.price}.00</p>
//             <div className="flex space-x-2 mt-2">
//                 <div className='size-4 hover:outline outline-1 outline-neutral-400 hover:outline-offset-2 cursor-pointer rounded-full border-2'
//               style={{backgroundColor: group.product.color}}
//               title={group.product.color}></div>
//             </div>
//             {/* <div className="flex items-center mt-2">
//               <div className="flex items-center ">
//                 {'★'.repeat(product.rate)}
//                 {'☆'.repeat(5 - product.rate)}
//               </div>
//             </div> */}
//           </div>
//         </div>
//       ))};
//     </div>
//   )
// }

// export default ProductCard




import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const ProductCard = ({ category, sortOrder, gender }) => {
  const [productGroups, setProductGroups] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products`);
        setProductGroups(response.data);
        console.log(response.data);
      }
      catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    let productsToSort = [...productGroups];
    if (category) {
      productsToSort = productsToSort.filter(product => {
        if (gender === "Underwear") {
          return product.product.isMen === (category === 'Men');
        }
        return product.product.category.name === category;
      });
    }
    const sortedProducts = productsToSort.sort((a, b) => {
      if (sortOrder === 'LowToHigh') {
        return a.product.price - b.product.price;
      } else if (sortOrder === 'HighToLow') {
        return b.product.price - a.product.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  }, [category, sortOrder, gender, productGroups]);

  // const sortedProducts = [...productGroups].sort((a,b) => {
  // if (sortOrder === 'LowToHigh'){
  // return a.product.price - b.product.price;
  // }
  // else if (sortOrder === 'HighToLow'){
  // return b.product.price - a.product.price;
  // }
  // return 0;
  // })

  // useEffect(() => {
  // if (category){
  // setFilteredProducts(productGroups.filter(product => product.categoryName === category));
  // }
  // else{
  // setFilteredProducts(productGroups);
  // }
  // }, [category, productGroups]);

  return (
    <div className='grid grid-cols-4 gap-1'>
      {filteredProducts.map((group, id) => (
        <div className='productCard' key={id}>
          <Link><img src={group.product.imageUrl} alt="" className="w-96 h-[490px]" /></Link>
          <div className='p-4'>
            <Link className='text-neutral-500 text-xs font-semibold '>{group.product.name}</Link>
            <p className='text-sm py-1'>${group.product.price}.00</p>
            <div className="flex space-x-2 mt-2">
              <div className='size-4 hover
outline-1 outline-neutral-400 hover
cursor-pointer rounded-full border-2'
                style={{ backgroundColor: group.product.color }}
                title={group.product.color}></div>
            </div>
            {/* <div className="flex items-center mt-2">
<div className="flex items-center ">
{'★'.repeat(product.rate)}
{'☆'.repeat(5 - product.rate)}
</div>
</div> */}
          </div>
        </div>
      ))};
    </div>
  )
}

export default ProductCard