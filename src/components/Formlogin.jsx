import React from 'react'
import '../css/styleForm.css'
import image from '../img/img1.png'
import Login from './Login'
import Register from './Register';
import Profile from './Profile';
import { useEffect, useState } from 'react'

export default function Formlogin(props) {
    const [show, setShow] = useState(false)

    const [success, setSucess] = useState(false)

    return (
        <div>
            {show && <Register onClick={() => setShow(false)}/>}

            {   success ? <Profile /> :

                    <div className="row test">
                        <div className="col-4">
                            <img src={image} className="img-login" alt="Hello anh em" />
                        </div>
                        <div className="col-8">
                            <div className="register">
                                <div className="register-title" 
                                    onClick={() => setShow(true)}
                                >
                                    Đăng ký
                                </div>
                            </div>
                            
                            <Login show={() => setSucess(true)} />

                            <div className="br"></div>

                            <div className="footer">
                                <div className="footer-title">
                                    Theo dõi trên mạng xã hội
                                </div>
                                <div className="icon-footer">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                    <ion-icon name="logo-google"></ion-icon>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div> 
            }
        </div>
    )
}
