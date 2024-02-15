import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    ThemeMode: "light",
    LightMode: () => { },
    DarkMode: () => { },
})


export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}


