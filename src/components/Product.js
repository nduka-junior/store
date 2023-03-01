import React from "react";
import useStoreContext from "../data/useContext";

function Product({ product }) {
  const { addOneToCart, items, getProductQuantity, removeOneFromCart } =
    useStoreContext();
  const itemQuantity = getProductQuantity(product.id);
  return (
    <div style={{ margin: "40px", border: "1px solid black", padding: "20px" }}>


      <img style={{ width: "150px" }} src={product.image} alt="" />
      <div>
        <h3>{product.title}</h3>
        <h3>${product.price}</h3>
      </div>
      {itemQuantity ==0 ? (
        <button
          onClick={() => {
            addOneToCart(product.id);
          }}
        >
          Add to cart
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              removeOneFromCart(product.id);
            }}
          >
            -
          </button>
          <span>{itemQuantity}</span>
          <button
            onClick={() => {
              addOneToCart(product.id);
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
