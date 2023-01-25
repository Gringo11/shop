import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Gringo Shop </Link>
      </div>
      <div className="links">
        <Link to="/Basket">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="he">
            {props.basketTotal > 0 && (
              <div className="counter">{props.basketTotal}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};
