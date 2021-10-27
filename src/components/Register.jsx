import React from 'react'
import '../css/styleRegister.css'

export default function Register(props) {
    console.log(props);
    return (
        <div className="main">
            <div className="sign-up">
                <div className="register-sign">
                    <p className="sign-title">
                        Đăng ký
                    </p>
                    <i className="fas fa-times close" onClick={props.onClick}></i>
                </div>
                <div className="sign-br"></div>
                <div className="sign-input">
                    <div className="input-left">
                        <label htmlFor="name" className="input-label">Họ và tên</label>
                        <input type="text" id="name"  className="input-btn" placeholder="Trần Văn A"/>

                        <label htmlFor="number" className="input-label">Số điện thoại</label>
                        <input type="text" id="number"  className="input-btn" placeholder="0123 456 789"/>
                    </div>
                    <div className="input-left">
                        <label htmlFor="gender" className="input-label">Giới tính</label>
                        <input type="text" id="gender"  className="input-btn" placeholder="Nam"/>

                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="text" id="email"  className="input-btn" placeholder="example@gmail.com"/>
                    </div>
                </div>
                <div className="password-sign">
                    <label htmlFor="password" className="input-label password-label">Mật khẩu</label>
                    <input type="text" id="password" className="input-btn password-btn" placeholder="Mật khẩu" />
                    <i className="fas fa-eye eye-password"></i>
                </div>
                <div className="password-sign">
                    <label htmlFor="re-password" className="input-label password-label">Xác nhận mật khẩu</label>
                    <input type="text" id="re-password" className="input-btn password-btn" placeholder="Xác nhận mật khẩu" />
                    <i className="fas fa-eye eye-password"></i>
                </div>

                <div className="button">
                    <div className="btn-submit">
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
