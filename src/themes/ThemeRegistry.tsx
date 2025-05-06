'use client';

import * as React from 'react';
import {
  ThemeProvider,
  CssBaseline,
  StyledEngineProvider,
} from '@mui/material';
import theme from './theme';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
