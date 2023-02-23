import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4ac776',
      main: '#1db954',
      dark: '#14813a',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(255,255,255,1)',
      dark: 'rgba(255,255,255,0.5)',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
