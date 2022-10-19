import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs' 
import {TbMenu2} from 'react-icons/tb'
function Header() {
  return (
    <header>
      <div className='flex items-center 
      flex-grow bg-amazon_blue py-2 p-1'>
     <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
        <Image 
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          width={150}
          height={40}
          objectFit='contain'
          className='cursor-pointer'
          />
        </div>
        <div className='hidden sm:flex rounded-md
        cursor-pointer items-center h-10 flex-grow'>
          <input className='h-full p-2 px-4 flex-grow rounded-l-md outline-none' type='text'/>
          <AiOutlineSearch className='w-10 p-2 h-10 bg-yellow-400 rounded-r-md  hover:bg-yellow-500' />
        </div>
        <div className='flex items-center text-white
         font-semibold text-xs whitespace-nowrap mx-1 sm:mx-4 space-x-4'>
          <div className='links'>
            <p>Hello Zain Fiaz</p>
            <p className=' font-extrabold text-xs md:text-sm'>Accounts $ Links</p>
          </div>
          <div className='links'>
            <p>Returns</p>
            <p className=' font-extrabold text-xs md:text-sm'>& Orders</p>
          </div> 
          <div className='flex links items-center relative'>
          <span className='
          absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold text-center'>0</span>
            <p><BsCart2 className='h-9 w-9'
            /></p>
            <p className='pt-4 font-extrabold text-xs md:text-sm hidden sm:inline-flex'>Cart</p>
          </div>
        </div>
      </div>
      <div className='flex items-center bg-amazon_blue-light text-sm font-semibold space-x-4 py-2 text-white px-2'>
        <p className='flex items-center '>
          <TbMenu2 className="h-6 w-6 mr-1"/>
          <p>All</p>
        </p>

        <p className='links'>Today's Deal</p>
        <p className='links'>Customer Services</p>
        <p className='links hidden sm:flex'>Registry</p>
        <p className='links hidden sm:flex'>Gifts Cards</p>
        <p className='links hidden sm:flex
        '>Sell</p>

      </div>
    </header>
  )
}

export default Header;