import React, {useContext, useCallback, useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';
import {
    Provider as PaperProvider,
    MD3DarkTheme as PaperDarkTheme,
    MD3LightTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { myThemes } from '../../Configs/theme';

const lightTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        ...myThemes.light,
        red: 'red',
    },
};

const darkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        ...myThemes.dark,
        red: 'black',
    },
};

export type Theme = typeof lightTheme;

export type ThemeType = 'dark' | 'light';

export interface ThemeContextValue{
    theme: Theme;
    themeType: ThemeType;
    isDarkTheme: boolean;
    toggleThemeType: () => void;
    setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
    theme: lightTheme,
    themeType: 'light',
    isDarkTheme: false,
    toggleThemeType: () => {},
    setThemeType: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    const colorScheme = useColorScheme();
    const [themeType, setThemeType] = useState<ThemeType>(colorScheme || 'light');

    const toggleThemeType = useCallback(() => {
        setThemeType(prev => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    const isDarkTheme = useMemo(() => themeType === 'dark', [themeType]);

    const theme = useMemo(
        () => (isDarkTheme ? darkTheme : lightTheme),
        [isDarkTheme],
    );

    return (
        <NavigationContainer>
            <PaperProvider>
                <ThemeContext.Provider
                    value={{
                        theme,
                        themeType,
                        isDarkTheme,
                        toggleThemeType,
                        setThemeType,
                    }}>
                    {children}
                </ThemeContext.Provider>
            </PaperProvider>
        </NavigationContainer>
    );
};
