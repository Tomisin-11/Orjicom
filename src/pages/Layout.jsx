import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar"; // make sure path is correct

const Layout = ({ cartItems, setCartItems }) => {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />

      {/* Page content renders here */}
      <Outlet />
    </>
  );
};

export default Layout;
