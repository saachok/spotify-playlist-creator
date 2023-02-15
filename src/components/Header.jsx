import * as React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPES,
} from '../constants';

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;

export default function Header({ code }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Spotify Playlist Creator
        </Typography>
        {!code ? (
          <Button color="inherit" href={AUTH_URL}>
            Login
          </Button>
        ) : (
          <Button color="inherit">Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
