import { Backdrop, Box, Typography } from '@mui/material';
import StyledButton from '../styled components/StyledButton';

const ErrorModal = ({ error, setError }) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={error.status}
      >
        <Box
          sx={{
            height: '8rem',
            width: '16rem',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'whitesmoke',
            color: 'grey.900',
            borderRadius: '1rem',
          }}
        >
          <Typography variant="h6">Error!</Typography>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ textAlign: 'center' }}
          >
            {error.name === 'TypeError'
              ? "Can't find any match with your entered title."
              : error.message}
          </Typography>
          <StyledButton
            variant={'outlined'}
            onClick={() => {
              setError(false);
            }}
            sx={{
              '&: hover': {
                backgroundColor: 'rgb(200,200,200)',
              },
            }}
          >
            OK
          </StyledButton>
        </Box>
      </Backdrop>
    </div>
  );
};

export default ErrorModal;
