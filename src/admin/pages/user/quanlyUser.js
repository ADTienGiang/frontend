
import React, { useState, useEffect } from "react";
import adminLayout from "../../hoc/adminLayout";
import dotenv from 'dotenv'
import { Link } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
dotenv.config()
  const khachhang = () => {
    const [khachhang, setCustomer] = useState([]);

    useEffect(() => {
        getCustomer();
    }, []);

    const getCustomer = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}users/custumer`);
      setCustomer(response.data);
    };

    const deleteSanpham = async (sanphamID) => {
      try {
        confirmAlert({
            title: 'Xác nhận xóa ?',
            message: 'Bạn có chắc chắn muốn xóa',
            buttons: [
              {
                label: 'Có',
                onClick: async() => {
                    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}users/custumer/${sanphamID}`);
             getCustomer();
                }
              },
              {
                label: 'Không',
                
              }
            ]
          });
      } catch (error) {
        console.log(error);
      }
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
                <th>id</th>
                <th>Email</th>
                <th>Name </th>
                <th>Phone</th>
                <th>address</th>
                <th>action</th>
                
              </tr>
            </thead>
            <tbody>
              {khachhang.map((sp) => (
                <tr key={sp.id}>
                  
                  <td>{sp.id}</td>
                  <td>{sp.email}</td>
                  <td>{sp.name}</td>
                  <td>{sp.address}</td>
                  <td>{sp.phone}</td>
                  <td>
                  <div className="dropdown table-action-dropdown">
                        <Link  onClick={() => deleteSanpham(sp.id)} className="dropdown-item text-danger">
                            <i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete
                        </Link>
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

export default adminLayout(khachhang);