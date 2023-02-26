import React from 'react';
import { Box } from '@mui/material';

const EmbedPlayer = ({ playlistID }) => {
  return (
    <Box
      sx={{
        borderRadius: '1rem',
        width: { xs: '22rem', sm: '27rem', md: '32rem', lg: '37rem' },
        height: '28rem',
        margin: '1rem',
      }}
    >
      <iframe
        title="playlist-embed"
        style={{
          borderRadius: 'inherit',
          width: 'inherit',
          height: 'inherit',
        }}
        src={`https://open.spotify.com/embed/playlist/4SVlxJJxBuMu5B1wUnaMQU?utm_source=generator&theme=0`}
        // src={`https://open.spotify.com/embed/playlist/${playlistID}?utm_source=generator&theme=0`}
        frameBorder=""
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Box>
  );
};

export default EmbedPlayer;
