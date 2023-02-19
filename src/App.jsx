import { useState } from 'react';

import { Box, Container } from '@mui/material';

import Header from './components/Header';
import CreatePlaylistForm from './components/CreatePlaylistForm';

// const code = new URLSearchParams(window.location.search).get('code');

function App() {
  const [code, setCode] = useState(
    new URLSearchParams(window.location.search).get('code')
  );
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        height: '100vh',
        backgroundColor: 'whitesmoke',
      }}
    >
      <Header
        code={code}
        logout={() => {
          setCode('');
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {code ? <CreatePlaylistForm code={code} /> : null}
      </Box>
    </Container>
  );
}

export default App;
