import { getTrackList, capitalizeFirstLetter } from './dataFormatting.js';
import logo from '../Spotify_Icon_RGB_Green.png';
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
      throw new Error(`Can't find "${reqSong}" song.`);
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

export const setPlaylistCover = async (playlistID, accessToken) => {
  fetch(`https://api.spotify.com/v1/playlists/${playlistID}/images`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      // forums said that it should be encoded in base64 format
      url: 'https://play-lh.googleusercontent.com/P2VMEenhpIsubG2oWbvuLGrs0GyyzLiDosGTg8bi8htRXg9Uf0eUtHiUjC28p1jgHzo',
      height: 300,
      width: 300,
    }),
  });
};
