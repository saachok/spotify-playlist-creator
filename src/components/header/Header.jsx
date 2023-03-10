import { useState, useEffect, useContext } from 'react';
import { AccessContext } from '../../context/accessContext';
import useAuth from '../../hooks/useAuth';

import { Typography, Stack, Paper } from '@mui/material';
import LoginButton from './LoginButton';
import UserIcon from './UserIcon';
import { getUserAvatar } from '../../functions/requests';

const Header = ({ logout, theme, setThemeMode }) => {
  const [accessToken, setAccessToken] = useContext(AccessContext);
  const [avatar, setAvatar] = useState('');
  const [code, setCode] = useState(
    new URLSearchParams(window.location.search).get('code')
  );
  const accesTokenValue = useAuth(code);

  useEffect(() => {
    if (!accesTokenValue) return;
    setAccessToken(accesTokenValue);
  }, [accesTokenValue]);

  useEffect(() => {
    if (!accessToken) return;
    getUserAvatar(accessToken).then((img) => setAvatar(img));
  }, [accessToken]);

  const toggleTheme = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('mode', 'light');
      setThemeMode('light');
    } else {
      window.localStorage.setItem('mode', 'dark');
      setThemeMode('dark');
    }
  };

  return (
    <Paper elevation={4}>
      <Stack
        flexDirection={'row'}
        color={'primary.contrastText'}
        minWidth={'300px'}
        sx={{
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '2rem',
          padding: '1rem',
        }}
      >
        <Typography variant="h6">Spotify Playlist Creator</Typography>
        {!accessToken ? (
          <LoginButton variant={'outlined'} color={'inherit'} logout={logout} />
        ) : (
          <UserIcon toggleTheme={toggleTheme} logout={logout} avatar={avatar} />
        )}
      </Stack>
    </Paper>
  );
};

export default Header;
