import { useState } from 'react';

import { Box, Container } from '@mui/material';

import Header from './components/Header';
import CreatePlaylistForm from './components/CreatePlaylistForm';
import SearchModal from './components/modals/SearchModal';
import ErrorModal from './components/modals/ErrorModal';

function App() {
  const [code, setCode] = useState(
    new URLSearchParams(window.location.search).get('code')
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

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
        {code ? (
          <CreatePlaylistForm
            code={code}
            setLoading={(param) => {
              setLoading(param);
            }}
          />
        ) : null}
        {loading ? <SearchModal /> : null}
        {error ? (
          <ErrorModal
            setError={() => {
              setError(false);
            }}
          />
        ) : null}
      </Box>
    </Container>
  );
}

export default App;
