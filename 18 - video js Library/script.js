const player = videojs("my-video", {
  playbackRates: [0.5, 1, 1.5, 2],
  plugins: {
    seekButtons: {
      forward: 10,
      back: 10,
    },
    hotkeys: {
      volumeStep: 0.1,
      seekStep: 5,
      enableModifiersForNumbers: false,
    },
  },
});

