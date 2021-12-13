import { useState } from 'react'
import '../css/styleRegister.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function Register(props) {

    const [confirm, setConfirm] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {

        const { email, password, phone, gender, full_name } = data

        console.log(data)
        const bodyAPI = {
            Device: {
                DeviceEnvironment: "WEB"
            },
            Action: {
                ActionCode: "LOGIN_TNT.REGISTER"
            },
            Data: {
                email,
                phone,
                password,
                full_name,
                gender
            }
        }
    
        if( (data.password === confirm)) {
            let dataAPI = await axios.post('https://dev-api-interns.hdinsurance.com.vn/OpenApi/TT/Post', bodyAPI)
            
            console.log(dataAPI)
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
        <div className="main" onSubmit={handleSubmit(onSubmit)}>
            <form className="sign-up">
                <div className="register-sign">
                    <p className="sign-title">
                        Đăng ký
                    </p>
                    <Link to="/">
                        <i className="fas fa-times close" onClick={props.onClick}></i>
                    </Link>
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
                            {...register("full_name", {required: true})}
                        />
                        {errors?.full_name?.type === "required" && <div className="validate">This field is required</div>}

                        <label htmlFor="number" className="input-label">Số điện thoại</label>
                        <input
                            type="number"
                            id="number"
                            className="input-btn"
                            placeholder="0123 456 789"
                            {...register("phone", {required: true})}
                        />
                        {errors?.phone?.type === "required" && <div className="validate">This field is required</div>}
                    </div>
                    <div className="input-left">
                        <label htmlFor="gender" className="input-label">Giới tính</label>
                        <input
                            type="text"
                            id="gender"
                            className="input-btn"
                            placeholder="Nam"
                            {...register("gender", {required: true})}
                        />
                        {errors?.gender?.type === "required" && <div className="validate">This field is required</div>}

                        <label htmlFor="email" className="input-label">Email</label>
                        <input
                            type="text"
                            id="email"
                            className="input-btn"
                            placeholder="example@gmail.com"
                            {...register("email", {required: true})}
                        />
                        {errors?.full_name?.type === "required" && <div className="validate">This field is required</div>}

                    </div>
                </div>
                <div className="password-sign">
                    <label htmlFor="password" className="input-label password-label">Mật khẩu</label>
                    <input
                        type="text"
                        id="password"
                        className="input-btn password-btn"
                        placeholder="Mật khẩu"
                        {...register("password", {required: true})}

                    />
                    <i className="fas fa-eye eye-password"></i>
                    {errors?.password?.type === "required" && <div className="validate">This field is required</div>}
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
                    {confirm && <div className="validate">This field is required</div>}
                </div>

                <div className="button">
                    <button className="btn-submit"
                        type="submit"
                    >
                        <div>Đăng ký</div>
                        <div className="icon">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </button>

                    <div className="no-password">
                        Quên mật khẩu
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
