  import React, { useState, useEffect, useRef } from "react";
  import 'font-awesome/css/font-awesome.min.css';
  import axios from "axios";
  import { Link  } from "react-router-dom";
  import "../../assets/shop/shop.css"
  import { useAuth } from "../../contexts/AuthContext";
  import { Navbar }  from "../../components/navbar"
  import Footer from "../../components/footer"

  export const Shop = () => {
    const [sanpham, setSanpham] = useState([]);
    const [added, setAdded] = useState(false); // state để lưu trạng thái đã thêm sản phẩm vào giỏ hàng hay chưa
    const { isAuthenticated } = useAuth();

    useEffect(() => {
      getSanpham();
    }, []);

    useEffect(() => {
      if (isAuthenticated) {
      }
    }, [isAuthenticated]);

    const getSanpham = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}sanpham`);
      setSanpham(response.data);
    };

    const loaiRef = useRef(null);

    useEffect(() => {
      if (loaiRef.current) {
        const loaiWidth = loaiRef.current.getBoundingClientRect().width;
        loaiRef.current.style.width = `${loaiWidth}px`;
      }
    }, [sanpham]);

    const addToCart = async (sanpham) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Bạn chưa đăng nhập');
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}users/gio/them`, {
          idsp: sanpham.id,
          soluongmua: 1,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        setAdded(true); // cập nhật state added
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    };

    useEffect(() => {
      if (added) {
        setTimeout(() => {
          setAdded(false); // reset lại state
        }, 3000); // sau 3 giây sẽ tự động ẩn thông báo
      }
    }, [added]);
    return (
      <div>
        <Navbar />
      <div className="table-container">
         
        <h5 className="pb-2 mb-0">Sản phẩm</h5>
        <div className="row">
          {sanpham.map((sp) => (
            <div key={sp.id} className="col-md-3">
              <div className="card mb-3">
                <Link to={`/sanpham/${sp.id}`}>
                  <img src={sp.url} className="card-img-top" alt={sp.ten} />
                </Link>
                <div className="card-body">
                  <h6 ref={loaiRef} className="card-loai highlight">{sp.loai.tenloai}</h6>
                  <h6 className="card-title">{sp.ten}</h6>
                  <p className="card-text">{sp.gia}.000đ</p>
                </div>
                <button className="button" onClick={() => addToCart(sp)}>
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
        {added && <p>Đã thêm sản phẩm vào giỏ hàng</p>}
      </div>
      <Footer />
      </div>
    )
  };
