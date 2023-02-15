import React from 'react';

const CreatePlaylistForm = ({ code }) => {
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
