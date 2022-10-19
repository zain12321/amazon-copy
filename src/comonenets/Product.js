import Image from 'next/image'
import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id,image,category, price, description, title}) {
     const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
     )
     const  [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className='relative flex flex-col m-5 p-10 bg-white shadow-sm z-30'>
        <p className='absolute top-2 right-2'>{category}</p>
        <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        />
        <h3 className='my-3'>{title}</h3>
        <div className='flex items-center'>

        {Array(rating).fill().map((_,i) => (
            <AiFillStar className='h-5 w-5 text-yellow-400'/>

        ))}
      
        </div>
        <p className='tet-xs my-2 line-clamp-2'>{description}</p>
<p className='mb-5'>
    <Currency quantity={price} currency='GBP'/>
</p>

    {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
        <img 
        className='w-12'
        src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
        alt='' />
        <p className='text-xs text-gray-400'>Free Next day delivery</p>
    </div>
    )}

    <button className='button font-semibold'>Add to Basket</button>
    </div>
  )
}

export default Product