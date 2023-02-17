import { useState } from 'react';

import { Box, TextField, Button, Typography } from '@mui/material';

// import { USER_ID } from '../constants';
import useAuth from '../hooks/useAuth';

const CreatePlaylistForm = ({ code }) => {
  const [playlistTitle, setPlaylistTitle] = useState('');
  const accessToken = useAuth(code);

  const getTrackList = (playlistTitle) => {
    const tracks = playlistTitle.split(' ');
    return tracks;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const songsTitles = getTrackList(playlistTitle);
    console.log(songsTitles);
    const playlist = [];
    let searchOffset = 0;

    for (let i = 0; i < songsTitles.length; i++) {
      let reqSong = `${capitalizeFirstLetter(songsTitles[i])}`;

      if (searchOffset >= 1000) {
        console.log(`Can't find song with '${reqSong}' title.`);
        throw new Error('Too big offset!');
      }

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURI(
          reqSong
        )}&type=track&limit=50&offset=${searchOffset}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      const track = data.tracks.items.find((element) => {
        return element.name.toLowerCase() === reqSong.toLowerCase();
      });
      console.log('track:', track);
      if (!track) {
        searchOffset += 50;
        i--;
      } else {
        searchOffset = 0;
        playlist.push(track);
      }
    }
    console.log(playlist);

    // const promises = songsTitles.map(async (song) => {
    //   // setReqSongTitle((prevState) => prevState + ' ' + song);
    //   const response = await fetch(
    //     `https://api.spotify.com/v1/search?q=${encodeURI(
    //       // reqSongTitle
    //       song
    //     )}&type=track`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   const track = data.tracks.items.find(
    //     (element) => element.name.toLowerCase() === song.toLowerCase()
    //   );
    //   // if (track) {
    //   // setReqSongTitle('');
    //   // }
    //   return track;
    // });

    // const playlist = await Promise.all(promises);
    // console.log(playlist);

    setPlaylistTitle('');

    // const response = await fetch(
    //   `https://api.spotify.com/v1/users/${USER_ID}/playlists`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //     body: JSON.stringify({
    //       name: playlistTitle,
    //       description: 'Test description for playlist',

    //       //FIXME: all playlists create in public mode
    //       public: false,
    //     }),
    //   }
    // );
    // const data = await response.json();
    // console.log('data: ', data);
    // console.log(`Search track: ${playlistTitle}`);
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
