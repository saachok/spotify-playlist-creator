import { createTheme } from '@mui/material';

const mode = 'dark';

const lightPalette = {
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
};

const darkPalette = {
  primary: {
    light: '#373737',
    main: '#252525',
    contrastText: '#fff',
  },
  secondary: {
    main: 'rgba(255,255,255,1)',
  },
};

const theme = createTheme({
  palette: mode === 'light' ? lightPalette : darkPalette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&: hover': {
            backgroundColor:
              mode === 'light'
                ? `${lightPalette.primary.light}`
                : `${darkPalette.primary.light}`,
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
