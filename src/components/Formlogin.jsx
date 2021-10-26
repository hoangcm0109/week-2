import React from 'react'
import '../css/styleForm.css'
import image from '../img/img1.png'
import Login from './Login'
import { useEffect, useState } from 'react'

export default function Formlogin(Avt) {
    return (
        <div>
            <div className="row test">
                <div className="col-4">
                    <img src={image} className="img-login" alt="Hello anh em" />
                </div>
                <div className="col-8">
                    <div className="register">
                        <div className="register-title">
                            Đăng ký
                        </div>
                    </div>
                    
                    <Login />

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
        </div>
    )
}
