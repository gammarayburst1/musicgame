import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP',
    h4: {
      fontSize: '3rem',
    },
  },
  palette: {
    primary: {
      main: '#e2e2e2',
    },
    secondary: {
      main: '#ffd0cb',
    },
    background: {
      default: '#111111',
    },
  },
});

export default theme;