import { useState } from 'react';

import { Box, TextField, Typography, Paper } from '@mui/material';
import StyledButton from './styled components/StyledButton.jsx';

import { getPlaylistID, createPlaylist } from '../functions/requests.js';

import useAuth from '../hooks/useAuth';

const CreatePlaylistForm = ({ code, setLoading, setError, setPlaylistID }) => {
  const [playlistTitle, setPlaylistTitle] = useState('');
  const userInputField = document.querySelector('#outlined-basic');
  const accessToken = useAuth(code);

  const submitHandler = async (e) => {
    e.preventDefault();
    userInputField.blur();

    setLoading(true);
    try {
      await createPlaylist(playlistTitle, accessToken);

      const playlistID = await getPlaylistID(playlistTitle, accessToken);
      setPlaylistID(playlistID);
    } catch (error) {
      setLoading(false);
      setError({
        status: true,
        name: error.name,
        message: error.message,
      });
    }

    setLoading(false);

    setPlaylistTitle('');
  };

  return (
    <Paper
      elevation={4}
      sx={{
        marginTop: '1rem',
        bgcolor: 'primary.main',
        borderRadius: '1rem',
      }}
    >
      <Box
        component="form"
        onSubmit={submitHandler}
        color={'primary.contrastText'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: {
            xs: '20rem',
            sm: '25rem',
          },
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
          label="Playlist title"
          color="secondary"
          focused
          sx={{
            input: { color: 'primary.contrastText' },
            margin: '0.5rem',
          }}
        />
        <StyledButton type="submit" variant="outlined" color="inherit">
          Create
        </StyledButton>
      </Box>
    </Paper>
  );
};

export default CreatePlaylistForm;
