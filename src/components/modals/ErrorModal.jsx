import { Backdrop, Box, Button, Typography } from '@mui/material';

const ErrorModal = ({ error, setError }) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={error.status}
        // onClick={() => {
        //   setError(false);
        // }}
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
          <Button
            sx={{
              marginLeft: 'auto',
              marginRight: '0',
            }}
            onClick={() => {
              setError(false);
            }}
          >
            OK
          </Button>
        </Box>
      </Backdrop>
    </div>
  );
};

export default ErrorModal;
