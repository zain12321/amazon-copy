import Image from "next/image"
import { useState } from "react";
import Currency from 'react-currency-formatter';
import {AiFillStar} from 'react-icons/ai'

const MAX_RATING = 5;
const MIN_RATING = 1;

function CheckoutPage({id,image,category, price, description, title, hasPrime}) {

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
     );

  return (
    <div className="grid grid-cols-5">
   <Image src={image} height={200} width={200} objectFit="contain"
   />
    <div className="col-span-3 mx-3">
    <p>{title}</p>
    <div className="flex">
    {Array(rating).fill().map((_,i) => (
        <AiFillStar key={i} className="h-5 w-5 text-yellow-400"/>

    ))}
    </div>
 <div className="text-sm line-clamp-3 my-2">{description}</div>
   <Currency quantity={price} currency='GBP'/>
   
   {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
        <img 
        className='w-12'
        src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
        alt='' />
        <p className='text-xs text-gray-400'>Free Next day delivery</p>
    </div>
    )}
    </div>
    <div className="space-y-2 flex flex-col my-auto justify-self-end">
        <button className="button">Add to Basket</button>
        <button className="button">Remove From Basket</button>
    </div>
    
    </div>
  )
}

export default CheckoutPage