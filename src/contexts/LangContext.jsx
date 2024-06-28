import React, { useContext, useState } from "react";
import { locales } from "../locales";

const LangContext = React.createContext()
const LangUpdateContext = React.createContext()

export function useLang() {
    return useContext(LangContext)
}


export function useLangUpdate() {
    return useContext(LangUpdateContext)
}

export function LangProvider({ children }) {
    const [userLang, setUserLang] = useState(locales.languages[0])
    // const [userLang, setUserLang] = useState('polish')

    function changeUserLang(language) {
        setUserLang(language)
    }

    return (
        <LangContext.Provider value={userLang}>
            <LangUpdateContext.Provider value={changeUserLang}>
                {children}
            </LangUpdateContext.Provider>
        </LangContext.Provider>
    )
}