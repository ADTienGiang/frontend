import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "../../assets/shop/ChiTietSanPham.css";
import { Navbar }  from "../../components/navbar"
import Footer from "../../components/footer"
const SanPhamDetail = () => {
  const { id } = useParams();
  const [sanpham, setSanpham] = useState({});

  useEffect(() => {
    getSanpham();
  }, []);

  const getSanpham = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}sanpham/${id}`);
    setSanpham(response.data);
  };

  return (
    <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="product-image">
            <img src={sanpham.url} alt={sanpham.ten} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-details">
            <h1 className="tensanpham">{sanpham.ten}</h1>
            <div className="details">
              <div className="detail-title">Giá:</div>
              <div className="detail-info">{sanpham.gia}</div>
            </div>
            <div className="details">
              <div className="detail-title">Giới tính:</div>
              <div className="detail-info">{sanpham.gioitinh}</div>
            </div>
            <div className="details">
              <div className="detail-title">Kích cỡ:</div>
              <div className="detail-info">{sanpham.kichco}</div>
            </div>
            <div className="details">
              <div className="detail-title">Màu sắc:</div>
              <div className="detail-info">{sanpham.mau}</div>
            </div>
            <div className="details">
              <div className="detail-title">Chất liệu:</div>
              <div className="detail-info">{sanpham.chatlieu}</div>
            </div>
            <div className="details">
              <div className="detail-title">Số lượng:</div>
              <div className="detail-info">{sanpham.soluong}</div>
            </div>
            <div className="add-to-cart">
              <button className="btn btn-primary">Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SanPhamDetail;
