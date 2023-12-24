import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Login = () => {
    const [stateLogin, setStateLogin] = useState({
        email: '',
        password: ''
    })
    const handleOnChange = (e) => {
        setStateLogin({
            ...stateLogin, 
            [e.target.name]: e.target.value
        })
    }
    const handleLogin = () => {
        console.log('login', stateLogin)
    }
    return (
        <div 
            style={{
                backgroundColor: '#6d41a1', height: '100vh'
            }}
            className="background-login"
        >
            <div style={{
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div style={{
                    width: '400px', height: 'fit-content', border: '1px solid white',
                    padding: '8px 14px', borderRadius: '4px', boxSizing: 'border-box',
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',

                }}>
                    <h1 
                        style={{
                            textAlign: 'center', margin: '8px 0', color: 'white'
                        }}
                    >Login</h1>
                    <div style={{
                        color: 'white', display: 'flex', flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <label style={{width: '90px'}}>Username: </label>
                            <input 
                                style=
                                {{
                                    flex: '1', borderRadius: '4px', padding: '2px 5px 2px 8px', 
                                    color: '#6d41a1', outline: 'none'
                                }} type="email" className="form-input" placeholder="Nhập tài khoản"
                                    value={stateLogin.email} onChange={(e) => handleOnChange(e)}
                            />
                        </div>
                        <div style={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <label style={{width: '90px'}}>Password: </label>
                            <input 
                                style=
                                    {{
                                        flex: '1', borderRadius: '4px', padding: '2px 5px 2px 8px', color: '#6d41a1', outline: 'none' 
                                    }} 
                                type="password" className="form-input" placeholder="Nhập mật khẩu"
                                value={stateLogin.password} onChange={(e) => handleOnChange(e)}
                            />
                        </div>
                        <div style={{display: 'flex', height: '50px'}}>
                            <button style={{
                                width: '100%', border: 'none', padding: '8px 10px', 
                                marginTop: 'auto', borderRadius: '8px', color: '#6d41a1',
                                fontWeight: 'bold',
                                
                            }} onClick={() => handleLogin()}>
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login