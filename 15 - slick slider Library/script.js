$('.slider-parent').slick({
  dots: true,
  lazyLoad: 'ondemand',
  centerMode:true,
  autoplay: true,
  autoplaySpeed:1000,
  arrows:true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		