import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return <>
            <form className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Đăng nhập admin</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Địa chỉ email</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Nhập địa chỉ email hợp lệ" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Mật khẩu</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Nhập mật khẩu" />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Lưu đăng nhập
                    </label>
                    </div>
                    <Link to="/reset-password" className="text-body">Quên mật khẩu?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="/admin" type="button" className="btn btn-primary btn-lg">Đăng nhập</Link>
                </div>
            </form>
        </>
    }
}

export default authLayout(LoginPage);