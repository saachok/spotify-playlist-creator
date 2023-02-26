import * as React from 'react';

import { Typography, Stack, Paper } from '@mui/material';

import StyledButton from './styled components/StyledButton';

import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPES,
} from '../constants';
import UserIcon from './UserIcon';

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;

export default function Header({ code, logout, theme, setThemeMode }) {
  const toggleTheme = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('mode', 'light');
      setThemeMode('light');
    } else {
      window.localStorage.setItem('mode', 'dark');
      setThemeMode('dark');
    }
  };
  return (
    <Paper elevation={4}>
      <Stack
        flexDirection={'row'}
        color={'primary.contrastText'}
        minWidth={'300px'}
        sx={{
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '2rem',
          padding: '1rem',
        }}
      >
        <Typography variant="h6">Spotify Playlist Creator</Typography>
        {!code ? (
          <StyledButton variant="outlined" color="inherit" href={AUTH_URL}>
            Login
          </StyledButton>
        ) : (
          <UserIcon toggleTheme={toggleTheme} logout={logout} />
          // <Stack direction={'row'} gap={2}>
          //   <StyledButton
          //     variant="outlined"
          //     color="inherit"
          //     onClick={toggleTheme}
          //   >
          //     Switch theme
          //   </StyledButton>
          //   <StyledButton variant="outlined" color="inherit" onClick={logout}>
          //     Logout
          //   </StyledButton>
          // </Stack>
        )}
      </Stack>
    </Paper>
  );
}
