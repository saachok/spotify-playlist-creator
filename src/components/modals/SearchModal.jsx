import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

const SearchModal = () => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Box
          sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'whitesmoke',
            color: 'grey.900',
            borderRadius: '1rem',
          }}
        >
          <CircularProgress color="inherit" sx={{ margin: '1rem' }} />
          <Typography variant="h6" color="inherit">
            Looking for a few tracks...
          </Typography>
        </Box>
      </Backdrop>
    </div>
  );
};

export default SearchModal;
