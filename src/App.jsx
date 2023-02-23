import { useState } from 'react';

import { Box, Container, ThemeProvider } from '@mui/material';
import theme from './theme';

import Header from './components/Header';
import CreatePlaylistForm from './components/CreatePlaylistForm';
import SearchModal from './components/modals/SearchModal';
import ErrorModal from './components/modals/ErrorModal';

function App() {
  const [code, setCode] = useState(
    new URLSearchParams(window.location.search).get('code')
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    name: 'initial name',
    message: 'initial message',
  });

  return (
    <ThemeProvider theme={theme}>
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
          {code ? (
            <CreatePlaylistForm
              code={code}
              setLoading={(param) => {
                setLoading(param);
              }}
              error={error}
              setError={(param) => {
                setError(param);
              }}
            />
          ) : null}
          {loading ? <SearchModal /> : null}
          {error ? (
            <ErrorModal
              error={error}
              setError={() => {
                setError();
              }}
            />
          ) : null}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
