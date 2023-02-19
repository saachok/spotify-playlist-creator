import { useState } from 'react';

import { Box, TextField, Button, Typography } from '@mui/material';

import { getSongsID } from '../functions/dataFormatting.js';

import {
  createEmptyPlaylist,
  getPlaylistID,
  getSongList,
  addSongToPlaylist,
} from '../functions/requests.js';
import useAuth from '../hooks/useAuth';

const CreatePlaylistForm = ({ code, setLoading }) => {
  const [playlistTitle, setPlaylistTitle] = useState('');
  const accessToken = useAuth(code);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Search songs
    setLoading(true);

    const songList = await getSongList(playlistTitle, accessToken);
    const songListID = getSongsID(songList);

    // Create playlist
    createEmptyPlaylist(playlistTitle, accessToken);

    await new Promise((resolve, reject) => setTimeout(resolve, 300));

    const playlistID = await getPlaylistID(playlistTitle, accessToken);

    // Add songs
    addSongToPlaylist(playlistID, songListID, accessToken);

    setLoading(false);

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
