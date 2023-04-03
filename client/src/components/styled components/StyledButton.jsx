import React from 'react';
import { Button } from '@mui/material';

const StyledButton = ({
  children,
  color,
  variant,
  onClick,
  href,
  type,
  sx,
}) => {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      href={href}
      type={type}
      sx={{
        ...sx,
        textTransform: 'none',
        borderRadius: '2rem',
      }}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
