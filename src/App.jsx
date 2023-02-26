import { useState, useEffect } from 'react';

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
  const [themeMode, setThemeMode] = useState(
    window.localStorage.getItem('mode')
  );
  const [playlistID, setPlaylistID] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    name: 'initial name',
    message: 'initial message',
  });

  useEffect(() => {
    if (!themeMode) {
      window.localStorage.setItem('mode', 'dark');
      setThemeMode('dark');
    }
  }, [themeMode]);

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
          theme={themeMode}
          logout={() => setCode('')}
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
