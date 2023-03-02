import React from "react";
import { Link } from "react-router-dom";
import useStoreContext from "../data/useContext";

function Product({ product }) {
  const { addOneToCart, getProductQuantity, removeOneFromCart } =
    useStoreContext();
  const itemQuantity = getProductQuantity(product.id);
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product">
        <img src={product.image} alt={product.title} />
        <div className="bgColor">
          <div className="product_text">
            <p style={{marginBottom :'6px'}}>{product.title}</p>
            <p>${product.price}</p>
          </div>
        
        </div>
      </div>
    </Link>
  );
}

export default Product;
