import React, { useState  } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../contexts/AuthContext";

export const Navbar = React.memo(() => {
  const { user, logout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className={`menu ${isMobile ? "mobile" : ""}`}>
        {!user ? (
          <>
            <Link to="/users/register">Đăng ký</Link>
            <Link to="/users/login">Đăng nhập</Link>
          </>
        ) : (
          <>
            <button onClick={() => logout()}>Đăng xuất</button>
            <Link to="/users/giohang">Giỏ hàng</Link>
          </>
        )}
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="menu-button" onClick={handleMenuClick}>
        {isMobile ? "Close" : "Menu"}
      </button>
    </div>
  );
});
