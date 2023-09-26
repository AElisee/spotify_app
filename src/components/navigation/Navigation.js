import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = ({ left, right }) => {
  return (
    <div className="navigation">
      <NavLink to={left}>
        <img src="./images/chevron-left.svg" alt="chevron-left" />
      </NavLink>
      <NavLink className="right-btn" to={right}>
        <img src="./images/chevron-right.svg" alt="chevron-right" />
      </NavLink>
    </div>
  );
};

export default Navigation;
