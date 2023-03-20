import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";


const Jewelery = () => {
    const { products } = useContext(ProductContext);
    const filteredProducts = products.filter((item) => {
        return (
            item.category === "jewelery"
        );
    });
   return(
    <>
    <section className="py-9">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mt-6">
            {filteredProducts.map((product) => {
              return ( <Product product={product} key={product.id} /> );
            })}
          </div>
        </div>
      </section>
    </>
   )
}

export default Jewelery;