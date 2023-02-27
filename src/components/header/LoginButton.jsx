import React from 'react';
import StyledButton from '../styled components/StyledButton';
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPES,
} from '../../constants';

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;

const LoginButton = ({ variant, color }) => {
  return (
    <StyledButton variant={variant} color={color} href={AUTH_URL}>
      Login
    </StyledButton>
  );
};

export default LoginButton;
