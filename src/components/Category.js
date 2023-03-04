import React, { useEffect } from "react";
import useStoreContext from "../data/useContext";
import { Link } from "react-router-dom";
function Category() {
  const { category, setcategorySelected, loading } = useStoreContext();

  return (
    <div className="nav_items">
      {
        category.map((item, index) => {
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
    
    </div>
  );
}

export default Category;
