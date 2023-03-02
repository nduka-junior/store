import React from "react";
import useStoreContext from "../data/useContext";
import Product from "./Product";
import '../static/product.css'

function Products() {
  const { products } = useStoreContext();
 
  return (
    <div className="products">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;
