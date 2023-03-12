import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './admin/assets/css/app.css';
import QuanlyUser from './admin/pages/user/quanlyUser'
import LoginPage from './admin/pages/auth/LoginPage'
import ResetPassword from './admin/pages/auth/ResetPassword';
import ProfilePage from './admin/pages/profile/ProfilePage';
import ChangePasswordPage from './admin/pages/profile/ChangePasswordPage';
import UserPreferencesPage from './admin/pages/profile/UserPreferencesPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Sanpham from './admin/pages/sanpham/sanpham';
import ThemSanpham from "./admin/pages/sanpham/them_sanpham";
import SuaSanpham from "./admin/pages/sanpham/sua_sanpham";

import Loai from './admin/pages/loai/loai';
import AddLoai from "./admin/pages/loai/them_loai";
import SuaLoai from "./admin/pages/loai/sua_loai";

import Thuonghieu from "./admin/pages/thuonghieu/thuonghieu.js";
import AddThuonghieu from "./admin/pages/thuonghieu/them_thuonghieu";
import SuaThuonghieu from "./admin/pages/thuonghieu/sua_thuonghieu";


import { Shop } from "./user/pages/shop/shop";
import ChiTietSanPham from  "./user/pages/shop/ChiTietSanPham";
import { Cart } from "./user/pages/cart/cart";
import AuthContextProvider from "./user/contexts/AuthContext";
// user
import Register from "./user/pages/register/register.jsx";
import Login from "./user/pages/login/login.jsx";
function App() {
  return (
    

    <Router>
      <AuthContextProvider>
      <Routes>
        {/* đây là của user */}
        <Route exact path="/" element={<Shop />} />
        <Route exact  path="/sanpham/:id" element={<ChiTietSanPham />} />
        <Route exact path="/users/giohang" element={<Cart />} />
        <Route exact  path='/users/register'element={<Register />} />
        <Route exact path='/users/login'element={<Login/>}/>
      </Routes>
      </AuthContextProvider>
      <Routes>
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
      <Route path="/quanlyuser" element={<QuanlyUser />} />
    </Routes>
  );
}
export default App;
