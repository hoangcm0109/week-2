import React from 'react'
import { useState, useEffect } from 'react';

export default function Form( {title} ) {

    const [email, setEmail] = useState(() => {
        const getStorage = JSON.parse(localStorage.getItem('user')) || ''
        return getStorage.email
    })
    const [password, setPassword] = useState(() => {
        const getStorage = JSON.parse(localStorage.getItem('user')) || ''
        return getStorage.password
    })
    const [checked, setChecked] = useState(() => {
        const getStorage = JSON.parse(localStorage.getItem('user')) || ''
        return getStorage.checked
    })

    const setStorage = (data) => {
        const setUser = JSON.stringify(data)
        localStorage.setItem('user', setUser)
    }

    useEffect(() => {
        console.log({email});
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            email,
            password,
            checked
        }
    
        if(email === '123456' && password === '123456') {
            alert('Dang nhap thanh cong')
        } else {
            alert('Dang nhap that bai')
        }


        if(checked === true) {
            alert('Đã lưu tài khoản')
            setStorage(user)
        } else {
            alert('Đã hủy lưu')
            const user = {
                email: '',
                password: '',
                checked: false
            }
            setStorage(user)
        }
    }

    return (
        <div>
            <div className="heading col-12">
             <h1 style={{
                 "text-align": "center",
                 "padding": 20,
             }}>
                {title}
            </h1>
            </div>
            <form className="row g-3 col-8 justify-content-center mx-auto rounded">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="inputEmail4"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="inputPassword"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            name="check"
                            type="checkbox"
                            id="gridCheck"
                            checked = {checked}
                            onChange={(e) => setChecked(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Lưu mật khẩu
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword" className="form-label">Xóa dữ liệu</label>
                    <input type="reset" value="Reset form" />
                </div>
                <div className="col-12">
                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Đăng nhập</button>
                </div>
            </form>
        </div>
    )
}
