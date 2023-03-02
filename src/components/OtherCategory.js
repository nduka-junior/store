import React from "react";
import useContext from "../data/useContext";
import { Link } from "react-router-dom";
import "../static/othercategory.css";
function OtherCategory({ category }) {
  const { products } = useContext();
  const sortedData = products.filter((item) => item.category === category);
  console.log(sortedData);
  return (
    <>
      <h2 className="othercat_head color">Other related products</h2>
      <div className="othercat">
        {sortedData.map((item) => {
          return (
            <Link to={`/product/${item.id}`} key={item.id} className="sss">
              <div className="product othercat_main">
                <img src={item.image} alt={item.title} />
                <div className="bgColor">
                  <div className="product_text">
                    <p style={{ marginBottom: "6px" }}>{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default OtherCategory;
