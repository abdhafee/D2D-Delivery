// Initialize Swiper for automatic slide show
new Swiper('.card-wrapper', {
    loop: true,          // Enable looping for infinite scrolling
    spaceBetween: 30,    // Space between slides
    autoplay: {
        delay: 2000,     // Slide transition time in milliseconds (2 seconds)
        disableOnInteraction: false, // Ensures autoplay continues even after user interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,  // Dynamic bullets for compact pagination
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,  // Show 1 slide on small screens
        },
        768: {
            slidesPerView: 2,  // Show 2 slides on medium screens
        },
        1024: {
            slidesPerView: 3,  // Show 3 slides on large screens
        },
    }
});
