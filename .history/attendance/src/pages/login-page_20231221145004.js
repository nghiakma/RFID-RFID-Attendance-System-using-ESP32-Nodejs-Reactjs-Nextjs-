import React from "react";
import styles from '../styles/login-page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Login = () => {

    return (
        <div 
            style={{
                backgroundColor: '#6d41a1', height: '100vh'
            }}
        >
            <div style={{
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div style={{
                    width: '400px', height: '500px', border: '1px solid white',
                    padđing: '8px 14px'
                }}>
                    <h1 className="login-title">Login</h1>
                    <div className="login-handle">
                        <div className="login-form">
                            <label>Username: </label>
                            <input type="email" className="form-input" placeholder="Nhập tài khoản"/>
                        </div>
                        <div className="login-form">
                            <label>Password: </label>
                            <input type="password" className="form-input" placeholder="Nhập mật khẩu"/>
                        </div>
                        <div className="login-button">
                            <button className="login-btn">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login