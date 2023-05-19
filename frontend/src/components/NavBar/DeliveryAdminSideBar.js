import React from "react";
import { NavLink } from "react-router-dom";
import './DeliveryAdminSideBar.css'


function DeliveryAdminSideBar() {
  return (
    <div className="topnav">
         <NavLink to="/admin-home" activeClassName="">
        Home
      </NavLink>
      <NavLink to="/orderList" activeClassName="">
        Orders
      </NavLink>

      <NavLink to="/view-delivery" activeClassName="">
        Delivery Details
      </NavLink>

      <NavLink to="/add-delivery" activeClassName="">
        Add Delivery
      </NavLink>

      
      <NavLink to="/GenerateReport" activeClassName="">
        Monthly Report
      </NavLink>
    </div>
  );
}

export default DeliveryAdminSideBar;