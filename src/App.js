import "./App.css";
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './admin/assets/css/app.css';
import { useHistory } from "react-router-dom";
import TypographyPage from './admin/pages/TypographyPage'
import LoginPage from './admin/pages/auth/LoginPage'
import ResetPassword from './admin/pages/auth/ResetPassword';
import ProfilePage from './admin/pages/profile/ProfilePage';
import ChangePasswordPage from './admin/pages/profile/ChangePasswordPage';
import UserPreferencesPage from './admin/pages/profile/UserPreferencesPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


// đăng nhập 

import Sanpham from './admin/pages/sanpham/sanpham';
import ThemSanpham from "./admin/pages/sanpham/them_sanpham";
import SuaSanpham from "./admin/pages/sanpham/sua_sanpham";

import Loai from './admin/pages/loai/loai';
import AddLoai from "./admin/pages/loai/them_loai";
import SuaLoai from "./admin/pages/loai/sua_loai";

import Thuonghieu from "./admin/pages/thuonghieu/thuonghieu.js";
import AddThuonghieu from "./admin/pages/thuonghieu/them_thuonghieu";
import SuaThuonghieu from "./admin/pages/thuonghieu/sua_thuonghieu";


import { Navbar } from "./user/components/navbar";
import { Shop } from "./user/pages/shop/shop";
import { Contact } from "./user/pages/contact";
import { Cart } from "./user/pages/cart/cart";
import { ShopContextProvider } from "./user/context/shop-context";
import LoginAdmin from "./admin/pages/auth/LoginPage";


function App() {
  return (

    <Router>
      {/* đây là của user */}
      <Routes>
        {/* đây là của user */}
        <Route path="/" element={<ShopContextProvider><Navbar /><Shop /></ShopContextProvider>} />
        <Route path="/contact" element={<ShopContextProvider><Navbar /><Contact /></ShopContextProvider>} />
        <Route path="/cart" element={<ShopContextProvider><Navbar /><Cart /></ShopContextProvider>} />
        {/* đây là của admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
</Router>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sanpham />} />
      <Route path="/addSanpham" element={<ThemSanpham />} />
      <Route path="sua/:id" element={<SuaSanpham />} />
      
      <Route path="/loai" element={<Loai />} />
      <Route path="/addLoai" element={<AddLoai />} />
      <Route path="loai/sua/:id" element={<SuaLoai />} />
      
      <Route path="/thuonghieu" element={<Thuonghieu />} />
      <Route path="/addThuonghieu" element={<AddThuonghieu />} />
      <Route path="thuonghieu/sua/:id" element={<SuaThuonghieu />} />
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/preferences" element={<UserPreferencesPage />} />
      <Route path="/typography" element={<TypographyPage />} />
    </Routes>
  );
}
export default App;
