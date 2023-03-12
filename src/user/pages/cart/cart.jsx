import React, { useState, useEffect,memo  } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import "../../assets/shop/cart.css";
import { Navbar } from "../../components/navbar";
import StripeCheckoutButton from "./stripe";

export const Cart = () => {
  const { user, isAuthenticated } = useAuth();
  const [cart, setCart] = useState(null);
  const [cartChanged, setCartChanged] = useState(false); // state mới
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    setCartTotal(calculateTotal(cart));
  }, [cart]);
  useEffect(() => {
    const fetchCart = async () => {
      if (isAuthenticated && user) {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}users/giohang`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setCart(response.data);
      }
    };
    fetchCart();
  }, [isAuthenticated, user, cartChanged]); // thêm state mới vào mảng dependencies

  const handleDecreaseQuantity = async (productId) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}users/giohang/giam/${productId}`,
        { soluongmua: -1 },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,  
          },
        }
      );
      setCart(response.data);
      setCartChanged(!cartChanged); // thay đổi state mới
    } catch (err) {
      console.error(err);
    }
  };

  const handleIncreaseQuantity = async (productId) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}users/giohang/tang/${productId}`,
        { soluongmua: 1 },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setCart(response.data);
      setCartChanged(!cartChanged); // thay đổi state mới
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}users/giohang/xoa/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          data: {
            idsp: productId
          }
        }
      );
      setCart(response.data);
      setCartChanged(!cartChanged); // thay đổi state mới
    } catch (err) {
      console.error(err);
    }
  };


  const calculateTotal = (cart) => {
    if (!cart || !cart.sanphams) {
      return 0;
    }
  
    return cart.sanphams.reduce((total, sp) => {
      return total + sp.gia * sp.sanphamgiohang.soluongmua;
    }, 0);
  }


  return (
    <div>
      <Navbar />
      <h2>Giỏ hàng</h2>
      <div className="cart-container">
        {cart && cart.sanphams && cart.sanphams.length > 0 ? (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng giá</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {cart.sanphams.map((sp) => (
                <tr key={sp.id} className="cart-item">
                  <td>
                    <img src={sp.url} alt={sp.ten} />
                  </td>
                  <td className="cart-item-name">{sp.ten}</td>
                  <td className="cart-item-price">giá {sp.gia}</td>
                  <td className="cart-item-quantity">
                    <button
                      onClick={() => handleDecreaseQuantity(sp.id)}
                      disabled={sp.soluong === 1}
                    >
                      -
                    </button>
                    <span>{sp.sanphamgiohang.soluongmua}</span>
                    <button
                      onClick={()=> handleIncreaseQuantity(sp.id)}
                    disabled={sp.soluong === sp.soluongtonkho}
                  >
                    +
                  </button>
                </td>
                <td className="cart-item-total">{sp.gia * sp.sanphamgiohang.soluongmua}</td>
                <td className="cart-item-remove">
                  <button onClick={() => handleRemoveItem(sp.id)}>Xóa</button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="cart-summary-title">
                Tổng giá:
              </td>
              <td className="cart-summary-value">
              {cartTotal}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Không có sản phẩm trong giỏ hàng</p>
      )}
    </div>
  </div>
  );
};
