import React, {useState} from 'react'

export const Item = ({ img }) => {
    const [count, setCount] = useState(1);

    const increaseCount = () => {
      setCount(count + 1);
    };
  
    const decreaseCount = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };

  return (
    <div className='flex justify-between space-x-10 mb-10'>
        <div className='w-[30%] h-full'>
            <img src={img} alt="" />
        </div>
        <div className='flex flex-col justify-between w-[60%]'>
            <div>
                <h2>Brushed Cotton Pull-On Shorts</h2>
                <div className='flex space-x-2 text-gray-400'>
                    <p>Ink</p>
                    <p>|</p>
                    <p>XL</p>
                </div>
                <div className='flex space-x-2'>
                    <p className='line-through text-gray-400'>$79.00</p>
                    <p>$39.50</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <p>Quantity</p>
                <div className='flex space-x-6'>
                <button onClick={decreaseCount}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
                </div>
                <button className='underline'>Remove</button>
            </div>
            
        </div>
    </div>
  )
}
