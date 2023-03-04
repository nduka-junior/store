import React from "react";
import useContext from "../data/useContext";
import { Link } from "react-router-dom";
import "../static/othercategory.css";
function OtherCategory({ category ,id}) {
  const { products } = useContext();
  const sortedDatas = products.filter((item) => item.category === category)
  const sortedData=sortedDatas.filter((item)=>item.id!==id)
  console.log(sortedData);
  return (
    <>
      <h2 className="othercat_head color">Other related products</h2>
      <div className="othercat">
        {sortedData.map((item) => {
          return (
            <Link to={`/store/product/${item.id}`} key={item.id} className="sss" onClick={() => {
              window.scrollTo(0, 0);
            }}>
              <div className="product othercat_main">
                <img src={item.image} alt={item.title} className="sss_img" />
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
