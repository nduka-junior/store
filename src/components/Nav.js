import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Category from "./Category";
import useContext from "../data/useContext";
import Loading from "./Loading";
import "../static/nav.css"
import { Link } from "react-router-dom";
function Nav() {
  const { loading ,items} = useContext();
  console.log(loading);
  return loading ? (
    <Loading />
  ) : (
    <div className="nav">
      <h2>JD</h2>
      <Category />
      <Link to="/store/checkout">
        <div className="nav_cart">
          <ShoppingCartIcon sx={{ fontSize: 25 }} />
          <span>{items.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
