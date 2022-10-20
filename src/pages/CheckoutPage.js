import Image from "next/image"
import { useState } from "react";
import Currency from 'react-currency-formatter';
import {AiFillStar} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function CheckoutPage({id,image,category, price, description, title, hasPrime}) {
    const dispatch = useDispatch();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
     );
     const addItemToBasket = () => {
        const product = {
         id,image,category, price,hasPrime, rating, description, title
        }
        dispatch(addToBasket(product))
      }
 
      const removeFromItemBasket = () => {
        dispatch(removeFromBasket(({ id })))
      }

  return (
    <div className="sm:grid sm:grid-cols-5 flex flex-col">
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
   <Currency className='text-2xl text-gray-500 my-2' quantity={price} currency='GBP'/>
   
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
    <div className="space-y-2 flex flex-col my-auto justify-self-end px-2">
        <button onClick={addItemToBasket} className="button">Add to Basket</button>
        <button onClick={removeFromItemBasket} className="button">Remove From Basket</button>
    </div>
    
    </div>
  )
}

export default CheckoutPage