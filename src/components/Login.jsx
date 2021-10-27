import React from 'react'
import { useState } from 'react'

export default function Login(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState('password')

    // console.log(props);

    const handleSubmit = () => {
        if(email === '123456' && password === '123456') {
            const run = props.showWebProfile
            console.log(run);
            return run
        }
        
    }


    return (
        <div>
            <div className="login">
                <div className="title-login">
                    Chào mừng bạn trở lại
                </div>
                <div className="heading-login">
                    Đăng nhập vào hệ thống
                </div>

                <input
                    type="text"
                    className="input-email input-login"
                    placeholder="E-mail hoặc Số điện thoại"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <input
                    type={showPassword}
                    className="input-password input-login"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <i className="fas fa-eye eye-password"
                    onClick={(e) => {
                        const type = showPassword === 'text' ? 'password' : 'texxt';
                        console.log(type);
                        setShowPassword(type)
                    }}
                ></i>

                <div className="submit">
                    <div className="btn-submit"
                        onClick={handleSubmit}
                    >
                        Đăng nhập
                        <div className="icon">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="no-password">
                        Quên mật khẩu
                    </div>
                </div>
                
            </div>
        </div>
    )
}
