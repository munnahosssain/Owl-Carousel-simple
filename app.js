$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 150,
    dots: false,
    button: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})