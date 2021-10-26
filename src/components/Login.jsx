import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = () => {

        console.log({email, password});
    }

    const [showPassword, setShowPassword] = useState('password')

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
                    className="input-email"
                    placeholder="E-mail hoặc Số điện thoại"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <input
                    type={showPassword}
                    className="input-password"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <i className="fas fa-eye eye-password"
                    onClick={(e) => {
                        const type = showPassword === 'text' ? 'password' : 'text';
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
