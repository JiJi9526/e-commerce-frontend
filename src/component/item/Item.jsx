import React, {useContext, useState} from 'react'
import { CartContext } from '../cardContext/CartContext';

export const Item = ({ item }) => {
    const [count, setCount] = useState(item.quantity);
    const {removeFromCart, updateQuantity} = useContext(CartContext);

    const increaseCount = () => {
      const newCount = count + 1;
      setCount(newCount);
      updateQuantity(item.id, newCount);
    };
  
    const decreaseCount = () => {
      if (count > 1) {
        const newCount = count - 1;
        setCount(newCount);
        updateQuantity(item.id, newCount);
      }
    };

  return (
    <div className='flex justify-between space-x-10 mb-10'>
        <div className='w-[30%] h-full'>
            <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='flex flex-col justify-between w-[60%]'>
            <div>
                <h2>{item.name}</h2>
                <div className='flex space-x-2 text-gray-400'>
                    <p>{item.color}</p>
                    <p>|</p>
                    <p>{item.size}</p>
                </div>
                <div className='flex space-x-2'>
                    <p>${item.price}</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <p>Quantity</p>
                <div className='flex space-x-6'>
                <button onClick={decreaseCount}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
                </div>
                <button className='underline'
                onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            
        </div>
    </div>
  )
}
