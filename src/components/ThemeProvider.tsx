'use client';

import React, { ReactNode } from 'react';
import { useThemeVariables } from '@/store/site-config';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeVariables = useThemeVariables();
  
  return (
    <div style={themeVariables as React.CSSProperties}>
      {children}
    </div>
  );
};

export default ThemeProvider; 