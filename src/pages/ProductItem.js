import React from "react";
import { Link, useParams } from "react-router-dom";
import "../static/productItem.css";
import useContext from "../data/useContext";
import Rating from "@mui/material/Rating";
import OtherCategory from "../components/OtherCategory";
import Loading from "../components/Loading";
import Nav from "../components/Nav";
function ProductItem() {
  const { id } = useParams();
  const {loading}=useContext()
 
  const {
    getProductData,
    addOneToCart,
    getProductQuantity,
    removeOneFromCart,
  } = useContext();

  const ProductItem = getProductData(id);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Nav />
      <div className="producct">
        <Link to="/store">
          <h3 className="color"> {"< Home "}</h3>
        </Link>
        {ProductItem && (
          <>
            <div className="productItem">
              <img src={ProductItem.image} alt={ProductItem.title} />
              <div className="productItem_text">
                <div className="product_item_price">
                  <p>{ProductItem.title}</p>
                  <p>${ProductItem.price}</p>
                </div>
                <div className="product_item_rating">
                  <span>{ProductItem.rating.rate}</span>
                  <Rating
                    name="half-rating-read"
                    value={ProductItem.rating.rate ? ProductItem.rating.rate : 0}
                    readOnly
                    precision={0.5}
                  />
                </div>
                <div className="product_item_buttons">
                  {getProductQuantity(ProductItem.id) == 0 ? (
                    <button
                      onClick={() => {
                        addOneToCart(ProductItem.id);
                      }}
                      className="product_item_button"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div className="product_item_buttonss">
                      <button
                        onClick={() => {
                          removeOneFromCart(ProductItem.id);
                        }}
                      >
                        -
                      </button>
                      <span>{getProductQuantity(ProductItem.id)}</span>
                      <button
                        onClick={() => {
                          addOneToCart(ProductItem.id);
                        }}
                      >
                        +
                      </button>
                      <span>
                        {getProductQuantity(ProductItem.id)} item(s) added
                      </span>
                      <Link to="/store/checkout">
                        <button
                          onClick={() => {
                            addOneToCart(ProductItem.id);
                          }}
                          style={{ width: "auto", marginLeft: "30px" }}
                        >
                          Checkout
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="product_item_desc">
                  <h4>Description</h4>
                  <p>{ProductItem.description}</p>
                </div>
              </div>
            </div>
            <OtherCategory
              id={ProductItem.id}
              category={ProductItem.category}
            />
          </>
        )}
      </div>
    </>
  );
}

export default ProductItem;
