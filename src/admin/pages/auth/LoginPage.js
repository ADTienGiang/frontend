import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/login.css";
import authLayout from "../../hoc/authLayout";
import dotenv from 'dotenv'
dotenv.config()
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}loginAdmin`, {
          email: email,
          password: password,
        });
        console.log(response.data.message);
        // Xử lý kết quả trả về từ server tại đây
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <>
      <form className="login-form" id="login-form">
        <div className="d-flex align-items-center my-4">
          <h1 className="text-center fw-normal mb-0 me-3">
            Đăng nhập admin
          </h1>
        </div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">
            Địa chỉ email
          </label>
          <input
            type="email"
            id="email-input"
            className="form-control form-control-lg"
            placeholder="Nhập địa chỉ email hợp lệ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password input */}
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password-input"
            className="form-control form-control-lg"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          {/* Checkbox */}
          <div className="form-check mb-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3"
            />
            <label className="form-check-label" htmlFor="form2Example3">
              Lưu đăng nhập
            </label>
          </div>
          <a href="/reset-password" className="text-body">
            Quên mật khẩu?
          </a>
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            id="login-button"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </>
  );
}

export default authLayout(LoginPage);
