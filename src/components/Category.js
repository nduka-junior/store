import React, { useEffect } from "react";
import useStoreContext from "../data/useContext";
import { Link } from "react-router-dom";
function Category() {
  const { category, setcategorySelected, items } = useStoreContext();

  return (
    <div>
      {category.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setcategorySelected(item);
            }}
          >
            {item}
          </button>
        );
      })}
      <Link to="/store/checkout">CheckOut</Link>
      <h3>Total items in cart :{items.length}</h3>
    </div>
  );
}

export default Category;
