import { useState } from 'react';

import { Box, Container, ThemeProvider } from '@mui/material';
import getTheme from './theme';

import Header from './components/Header';
import CreatePlaylistForm from './components/CreatePlaylistForm';
import SearchModal from './components/modals/SearchModal';
import ErrorModal from './components/modals/ErrorModal';
import EmbedPlayer from './components/EmbedPlayer';

function App() {
  const [code, setCode] = useState(
    new URLSearchParams(window.location.search).get('code')
  );
  const [themeMode, setThemeMode] = useState('dark');
  const [playlistID, setPlaylistID] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    name: 'initial name',
    message: 'initial message',
  });

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          backgroundColor: 'primary.light',
          height: '100vh',
        }}
      >
        <Header
          code={code}
          logout={() => setCode('')}
          theme={themeMode}
          setThemeMode={setThemeMode}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {code ? (
            <CreatePlaylistForm
              code={code}
              error={error}
              setPlaylistID={setPlaylistID}
              setLoading={setLoading}
              setError={setError}
            />
          ) : null}
          {loading ? <SearchModal /> : null}
          {error ? <ErrorModal error={error} setError={setError} /> : null}
          {playlistID ? <EmbedPlayer playlistID={playlistID} /> : null}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
