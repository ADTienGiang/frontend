import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/admin">
                    <img alt="Alt content" src={require('./../assets/images/logo.png')} />
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="" to="/admin">
                            <i className="fa fa-dashboard"></i> Sản phẩm
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/admin/loai">
                            <i className="fa fa-file-o"></i> Loại
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/admin/thuonghieu">
                            <i className="fa fa-file-o"></i> Thương hiệu
                        </Link>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/admin/quanlyuser">
                        <i className="fa fa-text-width" aria-hidden="true"></i> Quản lý user
                        </Link>
                    </li>
                    
                    {/* collapsable list item example */}
                    {/* <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Opportunity
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Overview</a></li>
                            <li><a href="#" className="rounded">Weekly</a></li>
                            <li><a href="#" className="rounded">Monthly</a></li>
                            <li><a href="#" className="rounded">Annually</a></li>
                        </ul>
                        </div>
                    </li> 
                    <li className="border-top my-3"></li> */}
                   
                </ul>
            </PerfectScrollbar>
            {/* <div className="dropdown fixed-bottom-dropdown">
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link className="dropdown-item" to="/profile"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất</Link></li>
                </ul>
            </div> */}
        </div>
    }
}

export default Sidebar;