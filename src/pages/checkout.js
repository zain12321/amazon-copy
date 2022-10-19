import Image from "next/image"
import { useSelector } from "react-redux"
import Header from "../components/Header"
import { selectItems } from "../slices/basketSlice"
import CheckoutPage from "./CheckoutPage";

function Checkout() {
    const items = useSelector(selectItems);

  return (
    <div>
    <Header/>
    <main className="lg:flex max-w-4xl 2xl:max-w-2xl mx-auto">
    <div className="m-5 shadow-sm flex-grow">
        <Image 
        src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
        width={1020}
            height={250}
            objectFit="contain"
            alt=""
        />
        <div className="flex bg-white flex-col p-5 space-y-10 ">
            <p className="text-2xl pl-1 font-semibold border-b pb-4">{items.length === 0 ? "Your Basket is Empty" : "Your Selected Items:"}</p>
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
    </main>
</div>
  )
}

export default Checkout