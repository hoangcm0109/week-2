import { useState } from 'react'
import '../css/styleRegister.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function Register(props) {
    let email, phone, password, full_name, gender

    const [confirm, setConfirm] = useState()

    const [overView, setOverView] = useState({
        email,
        phone,
        password,
        full_name,
        gender
    })
    
    const bodyAPI = {
            Device: {
                DeviceEnvironment: "WEB"
            },
            Action: {
                ActionCode: "LOGIN_TNT.REGISTER"
            },
            Data: overView
        }
        
    
    
    const handleSubmit = async () => {
        if( (overView.password === confirm)) {
            let data = await axios.post('https://dev-api-interns.hdinsurance.com.vn/OpenApi/TT/Post', bodyAPI)
            console.log(data);
            toast.success('Đăng ký thành công', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            toast.warn('Xác nhận mật khẩu sai', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

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
                        <input
                            type="text"
                            id="name"
                            className="input-btn"
                            placeholder="Trần Văn A"
                            onChange={(e) => {
                                setOverView(prev => ({
                                    ...prev,
                                    full_name: e.target.value
                                }))
                            }}
                        />

                        <label htmlFor="number" className="input-label">Số điện thoại</label>
                        <input
                            type="number"
                            id="number"
                            className="input-btn"
                            placeholder="0123 456 789"
                            onChange={(e) => {
                                setOverView(prev => ({
                                    ...prev,
                                    phone: e.target.value
                                }))
                            }}
                        />
                    </div>
                    <div className="input-left">
                        <label htmlFor="gender" className="input-label">Giới tính</label>
                        <input
                            type="text"
                            id="gender"
                            className="input-btn"
                            placeholder="Nam"
                            onChange={(e) => {
                                setOverView(prev => ({
                                    ...prev,
                                    gender: e.target.value
                                }))
                            }}
                        />

                        <label htmlFor="email" className="input-label">Email</label>
                        <input
                            type="text"
                            id="email"
                            className="input-btn"
                            placeholder="example@gmail.com"
                            onChange={(e) => {
                                setOverView(prev => ({
                                    ...prev,
                                    email: e.target.value
                                }))
                            }}
                        />
                    </div>
                </div>
                <div className="password-sign">
                    <label htmlFor="password" className="input-label password-label">Mật khẩu</label>
                    <input
                        type="text"
                        id="password"
                        className="input-btn password-btn"
                        placeholder="Mật khẩu"
                        onChange={(e) => {
                            setOverView(prev => ({
                                ...prev,
                                password: e.target.value
                            }))
                        }}
                    />
                    <i className="fas fa-eye eye-password"></i>
                </div>
                <div className="password-sign">
                    <label htmlFor="re-password" className="input-label password-label">Xác nhận mật khẩu</label>
                    <input
                        type="text"
                        id="re-password"
                        className="input-btn password-btn" 
                        placeholder="Xác nhận mật khẩu" 
                        onChange={(e) => setConfirm(e.target.value)}    
                    />
                    <i className="fas fa-eye eye-password"></i>
                </div>

                <div className="button">
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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false} 
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
