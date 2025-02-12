/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import  { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ProvideTheme = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    });

    useEffect(() => {

        console.log("Setting theme to:", theme); // Log BEFORE localStorage update

        localStorage.setItem('theme', theme); // FIRST: Update localStorage (CRITICAL)

        console.log("localStorage updated to:", localStorage.getItem('theme')); // Log AFTER localStorage update

        document.documentElement.setAttribute('data-theme', theme); // Set data-theme attribute (optional, but good practice)

        const event = new CustomEvent('themeChange', { detail: { theme } }); // Create the event

        window.dispatchEvent(event); // THEN: Dispatch the event (CRITICAL)

        console.log("themeChange event dispatched"); // Log after dispatching the event

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ProvideTheme;