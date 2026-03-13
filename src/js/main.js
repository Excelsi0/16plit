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


//масска для номера

const phoneInput = document.querySelector('#phone');

if (phoneInput) {
    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, '');

        if (!digits) return '';

        let normalized = digits;

        if (normalized[0] === '8') {
            normalized = '7' + normalized.slice(1);
        }

        if (normalized[0] !== '7') {
            normalized = '7' + normalized;
        }

        normalized = normalized.slice(0, 11);

        let result = '+7';

        if (normalized.length > 1) {
            result += ' (' + normalized.slice(1, 4);
        }

        if (normalized.length >= 5) {
            result += ') ' + normalized.slice(4, 7);
        }

        if (normalized.length >= 8) {
            result += '-' + normalized.slice(7, 9);
        }

        if (normalized.length >= 10) {
            result += '-' + normalized.slice(9, 11);
        }

        return result;
    };

    phoneInput.addEventListener('input', (e) => {
        e.target.value = formatPhone(e.target.value);
    });

    phoneInput.addEventListener('focus', (e) => {
        if (!e.target.value) {
            e.target.value = '+7';
        }
    });

    phoneInput.addEventListener('blur', (e) => {
        if (e.target.value === '+7') {
            e.target.value = '';
        }
    });
}

// акардеон 

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.removeAttribute('open');
                }
            });
        }
    });
});