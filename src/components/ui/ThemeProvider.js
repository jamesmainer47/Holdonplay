"use client";
import { useContext, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();
const ThemeSetContext = createContext();

export default function ThemeProvider({ children }){
    const [theme, setTheme] = useState("dark"); 

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeSetContext.Provider value={setTheme}>
                {children}
            </ThemeSetContext.Provider>
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const theme = useContext(ThemeContext);
    const setTheme = useContext(ThemeSetContext);
    return [theme, setTheme];
}