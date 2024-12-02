import * as React from 'react';
import { ThemeProvider as MaterialThemeProvider } from '@mui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import CssBaseline from '@mui/material/CssBaseline';

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return (
        <StyledThemeProvider theme={theme}>
            <MaterialThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MaterialThemeProvider>
        </StyledThemeProvider>
    );
}
