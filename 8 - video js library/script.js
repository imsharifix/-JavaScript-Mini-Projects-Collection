let video = videojs('my-video', {
    controls: true,
    plugins: {
        hotkeys: {
            volumeStep: 0.1,
            seekStep: 5,
            enableModifiersForNumbers: false,
        },
    },
});

// واترمارک تصویری
video.watermark({
    file: '1.jpg',
    xpos: 50,
    ypos: 100,
    xrepeat: 0,
    opacity: 0.5,
    clickable: true,
    url: "https://www.google.com",
});

// زوم و چرخش
video.zoomrotate({
    zoom: 1,
    rotate: 0
});

// لیست ویدیوها
video.playlist([
  {
    sources: [{
      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
      type: 'video/mp4'
    }],
    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
  },
  {
    sources: [{
      src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
      type: 'video/mp4'
    }],
    poster: 'http://media.w3.org/2010/05/bunny/poster.png'
  },
  {
    sources: [{
      src: 'http://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }],
    poster: 'http://www.videojs.com/img/poster.jpg'
  }
]);

// پخش خودکار اولین ویدیو
video.playlist.autoadvance(0);
video.playlist.currentItem(0);
