'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light' | 'pink';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const DEFAULT_THEME: Theme = 'pink';
const STORAGE_KEY = 'amar_theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
      const initialTheme = (savedTheme && ['dark', 'light', 'pink'].includes(savedTheme) 
        ? savedTheme 
        : DEFAULT_THEME) as Theme;
      
      setThemeState(initialTheme);
      applyTheme(initialTheme);
    } catch (error) {
      setThemeState(DEFAULT_THEME);
      applyTheme(DEFAULT_THEME);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    try {
      document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.style.colorScheme = newTheme === 'light' ? 'light' : 'dark';
    } catch (error) {
      console.error('Failed to apply theme:', error);
    }
  };

  const setTheme = (newTheme: Theme) => {
    if (!['dark', 'light', 'pink'].includes(newTheme)) return;
    
    setThemeState(newTheme);
    applyTheme(newTheme);
    
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Failed to persist theme:', error);
    }
  };

  const cycleTheme = () => {
    const themes: Theme[] = ['dark', 'light', 'pink'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    return {
      theme: DEFAULT_THEME,
      setTheme: () => {},
      cycleTheme: () => {},
    };
  }
  
  return context;
}
