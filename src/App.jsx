import React from 'react';
import Login from './components/Login';
import CreatePlaylistForm from './components/CreatePlaylistForm';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div
      style={
        {
          // display: 'flex',
          // height: '100vh',
          // justifyContent: 'center',
          // alignItems: 'center',
        }
      }
    >
      {code ? <CreatePlaylistForm code={code} /> : <Login />}
    </div>
  );
}

export default App;
