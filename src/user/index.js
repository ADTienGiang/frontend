import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

export const UserRoutes = () => {
  return (
    <ShopContextProvider>
    <Routes>
         <Navbar />
       <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
    </Routes>
</ShopContextProvider>
  );
};