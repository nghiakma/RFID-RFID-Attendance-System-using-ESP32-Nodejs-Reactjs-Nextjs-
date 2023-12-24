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
                    width: '400px', height: '200px', border: '1px solid white',
                    padđing: '8px 14px', borderRadius: '4px', boxSizing: 'border-box'
                }}>
                    <h1 
                        style={{
                            textAlign: 'center', margin: '8px 0', color: 'white'
                        }}
                    >Login</h1>
                    <div style={{
                        padding: '4px 10px'
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <label style={{width: '100px'}}>Username: </label>
                            <input style={{flex: '1'}} type="email" className="form-input" placeholder="Nhập tài khoản"/>
                        </div>
                        <div style={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <label style={{width: '100px'}}>Password: </label>
                            <input style={{flex: '1' }} type="password" className="form-input" placeholder="Nhập mật khẩu"/>
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