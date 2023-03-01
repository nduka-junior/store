import React from "react";
import useContext from "../data/useContext";
function CheckOutItems({ item }) {
  const { getProductData, deleteFromCart } = useContext();
  const productItems = getProductData(item.id);
  console.log(productItems);
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <img style={{ width: "150px" }} src={productItems.image} alt="" />
      <div>
        <h3>{productItems.title}</h3>
        <h3>${productItems.price}</h3>
        <h3>Quantity: {item.quantity}</h3>
      </div>
      <button onClick={() => {
deleteFromCart(item.id)
      }}>Remove From cart</button>
    </div>
  );
}

export default CheckOutItems;
