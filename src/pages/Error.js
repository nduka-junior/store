import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
              padding: " 30% 0",
        
      }}
    >
      <h1>404 Error</h1>
      <br />
      <h5>No results found!</h5>
          <p>Unfortunately we couldn't find any product.</p>
          <br />
      <Link to="/store" className="product_item_buttonsss" style={{width :"90px"}} >
        Home
      </Link>
    </div>
  );
}

export default Error;
