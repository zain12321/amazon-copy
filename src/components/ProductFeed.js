import Product from "./Product"

function ProductFeed({products}) {

  return (
    <div className="grid grid-flow-row-dense 
     md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
  {products.slice(0,4).map(({id,image,category, price, description, title}) => (
     <Product
id={id}
image={image}
category={category}
price={price}
description={description}
title={title}
     />
   ) )}
   <img className="md:col-span-full " src='https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg'
   alt='' />
   <div className="md:col-span-2">
   {products.slice(4,5).map(({id,image,category, price, description, title}) => (
     <Product
id={id}
image={image}
category={category}
price={price}
description={description}
title={title}
     />
   ) )}
  
   </div>
   {products.slice(4, products.length).map(({id,image,category, price, description, title}) => (
     <Product
id={id}
image={image}
category={category}
price={price}
description={description}
title={title}
     />
   ) )}
    </div>
  )
}

export default ProductFeed