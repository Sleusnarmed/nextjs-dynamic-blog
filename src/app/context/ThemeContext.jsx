"use client"

import { createContext, useEffect, useState } from "react";

//Create the context
export const ThemeContext = createContext()

// Helper function to get the initial theme value from local storage.
const getFromLocalStorage = () => {
    if (typeof window !== "undefined"){
        const value = localStorage.getItem("theme")
        return value || "light"
    }
}

// ThemeContextProvider component that wraps the application with the theme context.
export const ThemeContextProvider = ({children}) =>{
    // State to manage the current theme, initialized with the value from local storage.
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    })

    // Function to toggle between light and dark themes.
    const toggle = () =>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    // useEffect to update local storage whenever the theme changes.
    useEffect(()=>{
        localStorage.setItem("theme", theme)
    }, [theme])
    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}
