import React from "react";
import useStoreContext from "../data/useContext";
import Product from "./Product";

function Products() {
  const { products } = useStoreContext();
 
  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;
