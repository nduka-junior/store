import React from "react";
import CheckOutItems from "../components/CheckOutItems";
import useContext from "../data/useContext";
import "../static/checkoutitems.css";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Nav from "../components/Nav";

//

function Checkout() {
  const { items, getTotalCost, loading } = useContext();

  return loading ? (
    <Loading />
  ) : (
    <>
      <Nav />
      <div style={{ margin: "30px" }} className="main_checkout">
        <Link to="/store" className="color">
          <h4>{"< Home"}</h4>
        </Link>

        <div
          style={{
            marginLeft: "30px",
          }}
        >
          {items && items.length === 0 ? (
            <h3 style={{ marginTop: "10px" }} className="color">
              There are no items in the cart
            </h3>
          ) : (
            <>
              <p
                style={{ textAlign: "left", margin: " 20px 0" }}
                className="color"
              >
                Total items in cart: {items.length}
              </p>
              <div className="checkout_details">
                <div className="checkout_details_items">
                  {items.map((item) => {
                    console.log(item);
                    return (
                      <>
                        <CheckOutItems item={item} key={item.id} />
                      </>
                    );
                  })}
                </div>
                <div className="order_summary">
                  <h3>Order summary</h3>
                  <div className="dd">
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
                        $
                        {(getTotalCost() + 5 + getTotalCost() / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button className="product_item_buttonsss">Checkout</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
