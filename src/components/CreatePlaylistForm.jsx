import React from 'react';
import useAuth from '../hooks/useAuth';

const CreatePlaylistForm = ({ code }) => {
  const accessToken = useAuth(code);
  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <label>Enter playlist title</label>
        <input type="text" />
        <button>Create</button>
      </form>
      <p>{code}</p>
    </>
  );
};

export default CreatePlaylistForm;
