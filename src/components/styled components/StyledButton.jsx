import React from 'react';
import { Button } from '@mui/material';

const StyledButton = ({ children, color, variant, onClick, href }) => {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      href={href}
      sx={{
        color: '#fff',
        textTransform: 'none',
        borderRadius: '2rem',
        borderColor: 'rgba(255,255,255,0.5)',
        '&: hover': {
          borderColor: 'rgba(255,255,255,1)',
          backgroundColor: 'rgba(74, 199, 118, 0.5)',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
