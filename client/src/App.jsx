import { useState, useEffect, useContext } from 'react';
import { AccessContext } from './context/accessContext';

import { Box, Container, ThemeProvider } from '@mui/material';
import getTheme from './theme';

import Header from './components/header/Header';
import CreatePlaylistForm from './components/CreatePlaylistForm';
import SearchModal from './components/modals/SearchModal';
import ErrorModal from './components/modals/ErrorModal';
import EmbedPlayer from './components/EmbedPlayer';
import { AUTH_ENDPOINT } from './constants';

function App() {
  const [accessToken, setAccessToken] = useContext(AccessContext);
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
          theme={themeMode}
          logout={() => {
            // TODO: Find a way to correctly logout user
            window.history.go(`${AUTH_ENDPOINT}?show_dialog=true`);
          }}
          // logout={() => setAccessToken('')}
          setThemeMode={setThemeMode}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {accessToken ? (
            <CreatePlaylistForm
              loading={loading}
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
