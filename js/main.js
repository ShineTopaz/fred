AOS.init({
    duration: 1000, //1s
    //aos
});

// banner
const banner_list = new Swiper(".banner_list", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
})

//menu
const menu_list = new Swiper(".menu_list", {
    slidesPerView: 1.5,
    breakpoints: {
        750: {
            slidesPerView: 2.8,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    //slidesPerView 와 loop를 같이 사용할경우 슬라이드 퍼뷰로 보이는 갯수보다 슬라이드 갯수가 2배 이상 많아야 한다 ex) 퍼뷰 4 슬라이드 8
    centeredSlides: true,
    loop: true,
    spaceBetween: 50,
    autoplay: {
        delay: 5000,
    },
})

/* aos plugin (css / js) */