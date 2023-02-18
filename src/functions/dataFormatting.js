export const getTrackList = (playlistTitle) => {
  const tracks = playlistTitle.split(' ');
  return tracks;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getSongsID = (songList) => {
  return songList.map((item) => `spotify:track:${item.id}`);
};
