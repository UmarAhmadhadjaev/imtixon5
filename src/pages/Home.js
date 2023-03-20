import React, { useContext } from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";

const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mt-6">
            {filteredProducts.map((product) => {
              return ( <Product product={product} key={product.id} /> );
            })}
          </div>
        </div>
      </section>
      <div>
        <h1 className="font-medium text-2xl ml-10 text-blue-500">Electronics </h1>
      </div>
      <Electronics />
      <div>
        <h1 className="font-medium text-2xl ml-10 text-blue-600">Jewelery </h1>
      </div>
      <Jewelery />
    </>
  );
};

export default Home;