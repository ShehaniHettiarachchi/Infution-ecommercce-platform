import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="topnav">
      <NavLink to="/admin-home" activeClassName="">
        Dashboard
      </NavLink>
      <NavLink to="/add" activeClassName="">
        Add products
      </NavLink>

      <NavLink to="/view-product" activeClassName="">
        View Products
      </NavLink>

      <NavLink to="/printreport" activeClassName="">
        Print Report
      </NavLink>

    </div>
  );
}

export default Navbar;
