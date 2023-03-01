import React from "react";
import CheckOutItems from "../components/CheckOutItems";
import useContext from "../data/useContext";
import { Link } from "react-router-dom";
function Checkout() {
  const { items, getTotalCost } = useContext();
  console.log(items);
  return (
    <div style={{ margin: "40px" }}>
      <Link to="/">Home</Link>
      <h2>Number items in cart: {items.length}</h2>
      {items.length === 0 ? (
        <h3>There are no items in the list</h3>
      ) : (
        items.map((item) => {
          return (
            <>
              {" "}
              <CheckOutItems item={item} key={item.id} />
              <h2>Total: ${getTotalCost()}</h2>
            </>
          );
        })
      )}
    </div>
  );
}

export default Checkout;
