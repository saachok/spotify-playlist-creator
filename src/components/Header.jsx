import * as React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Spotify Playlist Creator
        </Typography>
        {!code ? (
          <StyledButton variant="outlined" href={AUTH_URL}>
            Login
          </StyledButton>
        ) : (
          <StyledButton variant="outlined" onClick={logout}>
            Logout
          </StyledButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
