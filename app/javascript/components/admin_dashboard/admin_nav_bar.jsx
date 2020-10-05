import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <nav>
      <NavLink to="/admin/product/new">Add Product </NavLink>
      <NavLink to="/admin/inventory">Inventory </NavLink>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/admin">Admin Dashboard</NavLink>
      <NavLink to="/admin/category/new">Add Category </NavLink>
    </nav>
  );
};

export default AdminNavBar;
