export const getTrackList = (playlistTitle) => playlistTitle.split(' ');

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getSongsID = (songList) => {
  return songList.map((item) => `spotify:track:${item.id}`);
};
