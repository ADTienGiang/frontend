import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";

class ResetPassword extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return <>
            <div className="reset-password-section text-center">
                  <h3><i className="fa fa-lock fa-4x"></i></h3>
                  <h2 className="text-center">Quên mật khẩu?</h2>
                  <p>Bạn có thể khôi phục lại mật khẩu ở đây.</p>
                  <div className="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" className="form" method="post">
    
                      <div className="form-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                            <input id="email" name="email" placeholder="địa chỉ email admin" className="form-control form-control-lg"  type="email" />
                      </div>

                        <div className="form-group mt-2">
                            <button type="button" className="btn btn-primary btn-lg">Đặt lại mật khẩu</button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Ghi nhớ mật khẩu <Link to="/login"
                                className="link-danger">Đăng nhập</Link></p>
                        </div>
                      
                    </form>
    
                  </div>
                </div>
        </>
    }
}

export default authLayout(ResetPassword);