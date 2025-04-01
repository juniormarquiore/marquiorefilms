'use client';

import React, { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme: React.CSSProperties = {
  '--primary-color': '#a67c52',
  '--secondary-color': '#0f1013',
  '--accent-color': '#d4af7a',
  '--text-color': '#ffffff',
  '--background-color': '#0f1013',
  '--border-color': '#2d2d2d',
} as React.CSSProperties;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <div style={defaultTheme}>
      {children}
    </div>
  );
};

export default ThemeProvider; 