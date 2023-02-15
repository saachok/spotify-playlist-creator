import { useState } from 'react';

import { Box, TextField, Button, Typography } from '@mui/material';

import { USER_ID } from '../constants';
import useAuth from '../hooks/useAuth';

const CreatePlaylistForm = ({ code }) => {
  const [playlistTitle, setPlaylistTitle] = useState('');
  const accessToken = useAuth(code);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.spotify.com/v1/users/${USER_ID}/playlists`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: playlistTitle,
          description: 'Test description for playlist',

          //FIXME: all playlists create in public mode
          public: false,
        }),
      }
    );
    const data = await response.json();
    console.log('data: ', data);
    setPlaylistTitle('');
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25rem',
        backgroundColor: 'lightgreen',
        marginTop: '4rem',
        borderRadius: '1rem',
        padding: '1rem',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6">Enter playlist title</Typography>
      <TextField
        value={playlistTitle}
        onChange={(e) => setPlaylistTitle(e.target.value)}
        id="outlined-basic"
        variant="outlined"
        label="Playlist title"
        color="success"
        sx={{
          margin: '0.5rem',
        }}
      />
      <Button type="submit" variant="contained" color="success">
        Create
      </Button>
    </Box>
  );
};

export default CreatePlaylistForm;
