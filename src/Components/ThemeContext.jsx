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


        localStorage.setItem('theme', theme); 

        document.documentElement.setAttribute('data-theme', theme); 

        const event = new CustomEvent('themeChange', { detail: { theme } }); 

        window.dispatchEvent(event);



    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ProvideTheme;