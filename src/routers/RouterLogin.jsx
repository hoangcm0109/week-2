import React, { Suspense } from 'react'
import { useContext } from "react";
import Register from '../components/Register';
import Formlogin from '../components/Formlogin';
// import Profile from '../components/Profile';
import { LoginContext } from '../context/LoginContext'
import { Routes, Route, Navigate} from "react-router-dom";

const Profile = React.lazy(() => import('../components/Profile'))

export default function RouterLogin() {
    const value = useContext(LoginContext)
    console.log(value.success);
    return (
        <div>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
                {/* <Route path="/login" element={<Navigate to="/" />} /> */}
          
                <Route path="/*" element={<Formlogin onSuccess={value.onSuccess} />} />

                <Route path="/login" element={ 
                    value.success ?
                            <Suspense fallback={<h1>Đăng nhập thành công</h1>}>
                                <Profile /> 
                            </Suspense> 
                        : <Navigate to="/" />
                } />

            </Routes>
        </div>
    )
}
