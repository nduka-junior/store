import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useContext from "../data/useContext";
import Loading from "./Loading";
import "../static/nav.css";
import { Link, Navigate } from "react-router-dom";
function Nav() {
  const { loading, items, authUser, handleLogout } = useContext();
  console.log(authUser);

  return loading ? (
    <Loading />
  ) : authUser ? (
    <div className="nav">
      <h2>JD</h2>

      <div className="nav_img">
        <img
          src={authUser.user.photoURL}
          alt={authUser.user.displayName}
        />
        <Link to="/store/checkout">
          <div className="nav_cart">
            <ShoppingCartIcon sx={{ fontSize: 30 }} />
            <span>{items.length}</span>
          </div>
        </Link>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  ) : (
    <Navigate to="/store/auth" />
  );
}

export default Nav;
