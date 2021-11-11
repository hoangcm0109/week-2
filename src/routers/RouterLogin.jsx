import React from 'react'
import { useContext } from "react";
import Register from '../components/Register';
import Formlogin from '../components/Formlogin';
import Profile from '../components/Profile';
import { LoginContext } from '../context/LoginContext'
import { Routes, Route} from "react-router-dom";

export default function RouterLogin() {
    const value = useContext(LoginContext)

    return (
        <div>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
          
                <Route path="/*" element={<Formlogin onSuccess={value.onSuccess} />} />

                <Route path="/login" element={ value.onSuccess && <Profile /> } />

            </Routes>
        </div>
    )
}
