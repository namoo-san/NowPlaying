var music = require('playback');

music.currentTrack((res) => {
  if (!res) {
    return;
  }

  console.log(res);
});