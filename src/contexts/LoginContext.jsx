import React, { useContext, useState } from "react";

const LoginContext = React.createContext()
const LoginUpdateContext = React.createContext()

export function useLogin() {
    return useContext(LoginContext)
}


export function useLoginUpdate() {
    return useContext(LoginUpdateContext)
}

export function LoginProvider({ children }) {
    const [userLogin, setUserLogin] = useState(false)
    // const [userLogin, setUserLogin] = useState(true) // na testy

    function changeUserLogin(login) {
        setUserLogin(login)
    }

    return (
        <LoginContext.Provider value={userLogin}>
            <LoginUpdateContext.Provider value={changeUserLogin}>
                {children}
            </LoginUpdateContext.Provider>
        </LoginContext.Provider>
    )
}