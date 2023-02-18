import { getTrackList, capitalizeFirstLetter } from './dataFormatting.js';

export const createEmptyPlaylist = async (playlistTitle, accessToken) => {
  fetch(`https://api.spotify.com/v1/me/playlists`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      name: playlistTitle,
      description: 'Test description for playlist',

      //FIXME: all playlists create in public mode
      public: false,
    }),
  });
};

export const getPlaylistID = async (playlistTitle, accessToken) => {
  const response = await fetch(
    `https://api.spotify.com/v1/me/playlists?limit=50`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  const playlist = data.items.find((element) => element.name === playlistTitle);
  return playlist.id;
};

export const getSongList = async (playlistTitle, accessToken) => {
  const songsTitles = getTrackList(playlistTitle);
  const playlist = [];
  let searchOffset = 0;

  for (let i = 0; i < songsTitles.length; i++) {
    let reqSong = `${capitalizeFirstLetter(songsTitles[i])}`;

    if (searchOffset >= 1000) {
      //TODO: Need to change alert() into normal UI info
      alert(`Can't find song with '${reqSong}' title.`);
      throw new Error('Too big offset!');
    }

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURI(
        reqSong
      )}&type=track&limit=50&offset=${searchOffset}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    const track = data.tracks.items.find((element) => {
      return element.name.toLowerCase() === reqSong.toLowerCase();
    });
    console.log(track);
    if (!track) {
      searchOffset += 50;
      i--;
    } else {
      searchOffset = 0;
      playlist.push(track);
    }
  }
  return playlist;
};

export const addSongToPlaylist = async (playlistID, tracks, accessToken) => {
  await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(tracks),
  });
};
