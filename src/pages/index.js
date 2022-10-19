import Head from "next/head";
import Banner from "../comonenets/Banner";
import Header from "../comonenets/Header";
import ProductFeed from "../comonenets/ProductFeed";
import Products from "../comonenets/ProductFeed";

export default function Home({products}) {

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

    <Header/> 
    <main className="xl:max-w-screen-xl 2xl:max-w-screen-2xl
      mx-auto">
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