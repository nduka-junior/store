import React from "react";
import CheckOutItems from "../components/CheckOutItems";
import useContext from "../data/useContext";
import "../static/checkoutitems.css";
import { Link } from "react-router-dom";
function Checkout() {
  const { items, getTotalCost } = useContext();
  console.log(items);
  return (
    <div style={{ margin: "40px" }}>
      <Link to="/" className="color">
        <h3>{"< Home"}</h3>
      </Link>

      {items && items.length === 0 ? (
        <h3>There are no items in the list</h3>
      ) : (
        <div className="checkout_details">
          <div>
            {items.map((item) => {
              return (
                <>
                  <CheckOutItems item={item} key={item.id} />
                  {/* <h2>Total: ${getTotalCost()}</h2> */}
                </>
              );
            })}
          </div>
          <div className="order_summary">
            <h3>Order summary</h3>
            <div className="order_summary_align">
              <span>Subtotal</span>
              <span>${getTotalCost()}</span>
            </div>
            <div className="order_summary_align">
              <span>Shipping estimate</span>
              <span>$5.00</span>
            </div>
            <div className="order_summary_align">
              <span>Tax estimate</span>
              <span>${(getTotalCost() / 100).toFixed(2)}</span>
            </div>
            <div className="order_summary_align">
              <span>Order total</span>
              <span>
                ${(getTotalCost() + 5 + getTotalCost() / 100).toFixed(2)}
              </span>
            </div>
            <button className="product_item_buttonsss">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
