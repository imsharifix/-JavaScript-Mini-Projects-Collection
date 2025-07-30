

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 4,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    lazyload :true,
    responsive:{
        0:{
            items:1,
            nav: false,
            dots: false,
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})