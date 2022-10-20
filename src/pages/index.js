import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {

  return (
    <div className="">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

    <Header/> 
    <main className="max-w-screen-xl 2xl:max-w-screen-2xl
      mx-auto bg-gray-200">
      {/* Banner */}
      <Banner/>

      {/* Products */}
      <ProductFeed products={products} />
    </main>     
    </div>
  );
}

 export async function getServerSideProps(context) {
      const products = await fetch("https://fakestoreapi.com/products").then(
        res => res.json()
      )
      return {
        props : {
          products,
        }
      }
}