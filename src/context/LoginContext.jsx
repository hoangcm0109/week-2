import React from 'react'
import { useState, createContext } from 'react'

const LoginContext = createContext()

export default function LoginProvider({ children }) {
    const [show, setShow] = useState(false)

    const [success, setSucess] = useState(false)

    const handle = {
        show,
        success,
        onShow: () => setShow(true),
        showFalse: () => setShow(false),
        onSuccess: () => setSucess(true)
    }

    return (
        <LoginContext.Provider value={handle}>
            {children}
        </LoginContext.Provider>
        

    )
}

export { LoginContext, LoginProvider }