import React from 'react'
import { useState, createContext } from 'react'

const LoginContext = createContext()

export default function LoginProvider({ children }) {
    const [success, setSucess] = useState(false)

    const handle = {
        success,
        onSuccess: () => setSucess(true)
    }

    return (
        <LoginContext.Provider value={handle}>
            {children}
        </LoginContext.Provider>
        

    )
}

export { LoginContext, LoginProvider }