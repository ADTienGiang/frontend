import React from "react";
import { Routes, Route } from "react-router-dom";
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'

import Sanpham from './pages/sanpham/sanpham';
import ThemSanpham from "./pages/sanpham/them_sanpham";
import SuaSanpham from "./pages/sanpham/sua_sanpham";

import Loai from './pages/loai/loai';
import AddLoai from "./pages/loai/them_loai";
import SuaLoai from "./pages/loai/sua_loai";

import Thuonghieu from "./pages/thuonghieu/thuonghieu.js";
import AddThuonghieu from "./pages/thuonghieu/them_thuonghieu";
import SuaThuonghieu from "./pages/thuonghieu/sua_thuonghieu";

export const AdminRoutes = () => {
    return (
      <Routes>
        <Route exact path='/admin' element={<Sanpham/>} />
        <Route exact path='/addSanpham' element={<ThemSanpham/>} />
        <Route exact path='admin/sua/:id' element={<SuaSanpham/>} />

        <Route exact path='/loai' element={<Loai/>} />
        <Route path="addLoai" element={<AddLoai/>}/>
        <Route path="loai/sua/:id" element={<SuaLoai/>}/>

        <Route exact path='/thuonghieu' element={<Thuonghieu/>} />
        <Route path="addThuonghieu" element={<AddThuonghieu/>}/>
        <Route path="thuonghieu/sua/:id" element={<SuaThuonghieu/>}/>

        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/reset-password' element={<ResetPassword/>} />
        <Route exact path='/profile' element={<ProfilePage/>} />
        <Route exact path='/change-password' element={<ChangePasswordPage/>} />
        <Route exact path='/preferences' element={<UserPreferencesPage/>} />
        <Route exact path='/typography' element={<TypographyPage/>} />
      </Routes>
    );
  };