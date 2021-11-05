import { useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/LoginContext'
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState('password')
    
    const [alert, setAlert] = useState(false)
    const [fail, setFail] = useState(false)


    const value = useContext(LoginContext)
    // console.log(props);

    const infoAPI = {
        email,
        password
    }

    const handleSubmit = async () => {
        const loginAPI = {
            Device: {
                DeviceEnvironment: "WEB"
            },
            Action: {
                ActionCode: "LOGIN_TNT.LOGIN"
            },
            Data: infoAPI
        }

        let dataLogin = await axios.post('https://dev-api-interns.hdinsurance.com.vn/OpenApi/TT/Post', loginAPI)

        dataLogin.data.Data.forEach(e => {

            if(e[0].STATUS === "Success") {
                setAlert(true)
                setFail(false)
                value.onSuccess()

            } else {
                toast.error('Mật khẩu không chính xác', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setAlert(false)
                setFail(true)
            } 
        }
        )
        
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
                        const type = showPassword === 'text' ? 'password' : 'text'
                        console.log(type)
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
                <div className="alert">
                    {alert && <div className="alert alert-success position-alert">Đăng nhập thành công</div>}
                    {fail && <div className="alert alert-danger position-alert">Tài khoản mật khẩu không chính xác</div>}
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    {/* Same as */}
                <ToastContainer />
            </div>
        </div>
    )
}
