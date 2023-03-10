import React from "react";
import useContext from "../data/useContext";
import "../static/checkoutitems.css";
function CheckOutItems({ item }) {
  console.log(item);
  const { getProductData, deleteFromCart } = useContext();
  const productItems = getProductData(item.id);
  console.log(productItems);
  return (
    <div className="checkoutitems">
      <img src={productItems.image} alt={productItems.title} />
        <p className="truncate">{productItems.title}</p>
     
      <p>$</p>
      <button
        style={{ zIndex: "99999" }}
        onClick={() => deleteFromCart(item.id)}
      >
        X
      </button>
    </div>
  );
}

export default CheckOutItems;
