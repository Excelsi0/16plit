import "/src/sass/style.scss";

// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Fancybox.bind("[data-fancybox]", {
// });

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

Fancybox.bind("[data-fancybox]", {});

new Swiper(".gallery__slider", {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 900,
    spaceBetween: 16,
    grabCursor: true,

    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: ".gallery__pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2.2,
        },
        1200: {
            slidesPerView: 2.6,
        },
    },
});


const reviewsSlider = new Swiper('.reviews__slider', {
    modules: [Pagination, Autoplay],
    loop: true,
    spaceBetween: 24,
    speed: 800,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.reviews__pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});


const nav = document.querySelector(".nav");

if (nav) {
    let scrollOffset = 30;
    let isFixed = false;

    function updateScrollOffset() {
        scrollOffset = window.innerWidth <= 1024 ? 100 : 30;
    }

    function updateNavState() {
        if (window.scrollY > scrollOffset && !isFixed) {
            nav.classList.add("nav_fixed");
            isFixed = true;
        } else if (window.scrollY <= scrollOffset && isFixed) {
            nav.classList.remove("nav_fixed");
            isFixed = false;
        }
    }

    function handleNav() {
        updateScrollOffset();
        updateNavState();
    }

    handleNav();

    window.addEventListener("load", handleNav);
    window.addEventListener("resize", handleNav);
    window.addEventListener("scroll", updateNavState);
}