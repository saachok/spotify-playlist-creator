import * as React from 'react';

import { AppBar, Typography } from '@mui/material';

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
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4rem',
        padding: '1rem',
      }}
    >
      <Typography variant="h6">Spotify Playlist Creator</Typography>
      {!code ? (
        <StyledButton variant="outlined" href={AUTH_URL}>
          Login
        </StyledButton>
      ) : (
        <StyledButton variant="outlined" onClick={logout}>
          Logout
        </StyledButton>
      )}
    </AppBar>
  );
}
