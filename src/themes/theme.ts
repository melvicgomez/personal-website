import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'var(--font-cabin)',
    h1: { fontFamily: 'var(--font-quicksand)' },
    h2: { fontFamily: 'var(--font-quicksand)' },
    h3: { fontFamily: 'var(--font-quicksand)' },
    h4: { fontFamily: 'var(--font-quicksand)' },
    h5: { fontFamily: 'var(--font-quicksand)' },
    h6: { fontFamily: 'var(--font-quicksand)' },
  },
});

export default theme;
