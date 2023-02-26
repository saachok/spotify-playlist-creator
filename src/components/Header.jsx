import * as React from 'react';

import { Typography, Stack } from '@mui/material';

import StyledButton from './styled components/StyledButton';

import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPES,
} from '../constants';

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;

export default function Header({ code, logout }) {
  return (
    <Stack
      flexDirection={'row'}
      color={'primary.contrastText'}
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
        <StyledButton variant="outlined" color="inherit" onClick={logout}>
          Logout
        </StyledButton>
      )}
    </Stack>
  );
}
