import { Paper, Stack, Typography } from '@mui/material';
import LoginButton from '../header/LoginButton';

const LoginModal = ({ logout }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        padding: '1rem',
        backgroundColor: 'primary.main',
        borderRadius: '1rem',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '1rem',
        }}
        direction="column"
        color="primary.contrastText"
      >
        <Stack direction="column" alignItems="center" marginBottom="0.5rem">
          <Typography variant="h5" color="white">
            Can't recognize You
          </Typography>
          <Typography variant="h6" color="white">
            Please login
          </Typography>
        </Stack>
        <LoginButton color="inherit" variant="outlined" logout={logout} />
      </Stack>
    </Paper>
  );
};

export default LoginModal;
