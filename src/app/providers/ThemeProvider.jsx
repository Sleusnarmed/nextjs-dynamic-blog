"use client"

// Utilizes the useContext hook to access the theme information.
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeProvider = ({children}) => {
    // Access the current theme from the ThemeContext using useContext.
    const { theme } = useContext(ThemeContext);

    // State to track whether the component is mounted.
    const [mounted, setMounted] = useState(false);

    // useEffect to set the mounted state to true after component mount.
    useEffect(() => {
        setMounted(true);
    }, []);

    // Render conditionally based on the mounted state.
    if (mounted) {
        return <div className={theme}>{children}</div>;
    }
};

export default ThemeProvider;
