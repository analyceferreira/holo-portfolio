import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import {darkTheme} from "./darkTheme";
import {lightTheme} from "./lightTheme";

export enum ThemeType {
    light = "light",
    dark = "dark",
};

const themes = {
    [ThemeType.light]: lightTheme,
    [ThemeType.dark]: darkTheme,
};

export const ThemeContext = createContext({
    theme: ThemeType.light,
    toggleTheme: () => {},
});



export const ThemeProvider : React.FC = ({ children }:any) => {
    const [theme, setTheme] = useState(ThemeType.light);

    useEffect(() => {
        loadTheme()
    }, []);

    async function loadTheme() {
        const savedTheme = await localStorage.getItem("@theme")
        if (savedTheme) {
            setTheme(savedTheme as ThemeType)
        }
    };

    const toggleTheme = () => {
        let newTheme;
        if (theme === ThemeType.light) {
            newTheme = ThemeType.dark
        } else {
            newTheme = ThemeType.light
        }

        localStorage.setItem('@theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={ themes[theme] }>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};