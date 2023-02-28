import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import adminLayout from "../../hoc/adminLayout";

const Loai=()=>{
    // lấy thương hiệu
    const [loai, setthuonghieu] = useState([]);

    useEffect(() => {
    getthuonghieu();
    }, []);

    const getthuonghieu = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}thuonghieu`);
    setthuonghieu(response.data);
    };
    // 
    const deleteThuonghieu = async (loaiID) => {
        try {
          await axios.delete(`${process.env.REACT_APP_BACKEND_URL}thuonghieu/${loaiID}`);
          getthuonghieu();
        } catch (error) {
          console.log(error);
        }
      };

  return <>
            <div className="table-container">
                <div className="row">
                    <div className="col">
                        <h5 className="pb-2 mb-0">Thương hiệu</h5>
                    </div>
                    <div className="col text-right">
                        <button className="btn btn-default low-height-btn"data-bs-toggle="modal" data-bs-target="#loadFormLoai">
                        <Link to="/admin/addThuonghieu" className="button is-success">Thêm thương hiệu   </Link>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Mã thương hiệu</th>
                                <th>Tên thương hiệu</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                        {loai.map((loaisp) => (

                            <tr key={loaisp.id}>
                                <td ><input type="checkbox"/></td>
                                <td>{loaisp.id}</td>
                                <td>{loaisp.tenhieu}</td>
                                
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><Link to={`sua/${loaisp.id}`}  className="dropdown-item"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Sửa</Link></li>
                                            <div className="dropdown-divider"></div>
                                            <li><Link   onClick={() => deleteThuonghieu(loaisp.id)} className="dropdown-item text-danger"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</Link></li>
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
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
  </>;
}

export default adminLayout(Loai);
