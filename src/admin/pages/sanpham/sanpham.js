import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import adminLayout from "../../hoc/adminLayout";
import dotenv from 'dotenv'
dotenv.config()
  const SanPham = () => {
    const [sanpham, setSanpham] = useState([]);

    useEffect(() => {
      getSanpham();
    }, []);

    const getSanpham = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}sanpham`);
      setSanpham(response.data);
    };

    const deleteSanpham = async (sanphamID) => {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}sanpham/${sanphamID}`);
        getSanpham();
      } catch (error) {
        console.log(error);
      }
    };

  const setEditData = (sp) => {
    // TODO: add your edit code here
  };

  return  <>
      <div className="table-container">
        <div className="row align-items-center justify-content-between">
          <div className="col">
            <h5 className="pb-2 mb-0">Sản phẩm</h5>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-default low-height-btn"
              data-bs-toggle="modal"
              data-bs-target="#loadFormLoai"
            >
              <Link to="/admin/addSanpham" className="button is-success">Thêm sản phẩm         </Link>
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giới tính</th>
                <th>Kích cỡ</th>
                <th>Màu sắc</th>
                <th>Chất liệu</th>
                <th>Hình ảnh</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Loại</th>
                <th>Thương hiệu</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sanpham.map((sp) => (
                <tr key={sp.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{sp.id}</td>
                  <td>{sp.ten}</td>
                  <td>{sp.gioitinh}</td>
                  <td>{sp.kichco}</td>
                  <td>{sp.mau}</td>
                  <td>{sp.chatlieu}</td>
                  <td>
                  <figure >
                  <img src={sp.url} alt="Image"style={{ width: '130px', height: '100px' }} />
                </figure>
                  </td>
                  <td>{sp.gia}</td>
                  <td>{sp.soluong}</td>
                  <td>{sp.loai.tenloai}</td>
                  <td>{sp.thuongHieu.tenhieu  }</td>
                  <td>
                  <div className="dropdown table-action-dropdown">
                    <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonSM"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                        <li>
                        <Link to={`sua/${sp.id}`} className="dropdown-item">
                            <i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit
                        </Link>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                        <Link  onClick={() => deleteSanpham(sp.id)} className="dropdown-item text-danger">
                            <i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete
                        </Link>
                        </li>
                    </ul>
                    </div>
                                </td>
                            </tr>
                             ))} 
                        </tbody>
                    </table>
                </div>
                <nav className="table-bottom-center-pagination" aria-label="Page navigation example ">
                    <ul className="pagination">
                        <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">1</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">2</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">3</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                                </Link>
                        </li>
                    </ul>
            </nav>
            </div>
        </>
}
export default adminLayout(SanPham);