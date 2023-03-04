import React from "react";
import useStoreContext from "../data/useContext";
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
