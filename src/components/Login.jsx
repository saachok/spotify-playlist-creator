import React from 'react';

import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPES,
} from '../constants';

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;

const Login = () => {
  return (
    <div>
      <a href={AUTH_URL}>
        <button
          style={{
            height: '3rem',
            width: '5rem',
          }}
        >
          Login
        </button>
      </a>
    </div>
  );
};

export default Login;
