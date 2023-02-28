import { useState, useEffect } from 'react';
import { Typography, Stack, Paper } from '@mui/material';
import LoginButton from './LoginButton';
import UserIcon from './UserIcon';
import { getUserAvatar } from '../../functions/requests';

const Header = ({ code, logout, theme, setThemeMode, accessToken }) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (!accessToken) return;

    getUserAvatar(accessToken).then((res) => setAvatar('value'));
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
        {!code ? (
          <LoginButton variant={'outlined'} color={'inherit'} logout={logout} />
        ) : (
          <UserIcon toggleTheme={toggleTheme} logout={logout} />
        )}
      </Stack>
    </Paper>
  );
};

export default Header;
