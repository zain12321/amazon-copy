import Image from "next/image"
import { useSelector } from "react-redux"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"
import CheckoutPage from "./CheckoutPage";
import {  signIn, useSession } from "next-auth/react"
import Currency from 'react-currency-formatter';

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal)
    const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
    <Header/>
    <main className="lg:flex max-w-6xl 2xl:max-w-2xl mx-auto ">
    <div className="m-5 shadow-sm flex-grow ">
        <Image 
        src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
        width={1020}
            height={250}
            objectFit="contain"
            alt=""
        />
        <div className="flex bg-white flex-col p-5  space-y-16 mx-3 my-4">
            <p className="text-lg sm:text-2xl pl-1 font-semibold border-b pb-4">
            {items.length === 0 ? "Your Basket is Empty" : "Your Selected Items:"}
            </p>
   {items?.map((item, i) => (
    <CheckoutPage
        key={i}
        id={item.id}
        title={item.title}
        rating={item.rating}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
        hasPrime={item.hasPrime}
    />
   ))}
        </div>
    </div>
    <div className="flex flex-col flex-grow bg-white mx-5 mt-5 px-6 py-2">
        {items.length > 0 && (
            <div className=" ">
                <h2 className="flex items-center text-sm whitespace-nowrap w-56">Subtotal 
                (${items.length} items:) 
                <span className="pl-1 font-bold text-sm ">
    <Currency  quantity={total} currency="GBP"/>
                </span>
                </h2>
                <button disabled={!session} className={`button  mt-2 ${!session && (
 "from-gray-300 to-gray-500 text-gray-200 border-gray-200 cursor-not-allowed"
                )}`}>
                    {!session ? "Sign in To Checkout" : "Proceed To Checkout"}
                </button>
            </div>
        )}
    </div>
    </main>
    <h1 ></h1>
</div>
  )
}

export default Checkout
