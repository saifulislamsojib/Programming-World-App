// initialize aos
AOS.init({
    duration : 2000
});

// Scroll toggle top
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        navbar.classList.add('bgc-primary', 'toggle-top', 'shadow');
    }
    else {
        navbar.classList.remove('bgc-primary', 'toggle-top', 'shadow');
    }
})

// Active Link
const links =  [...navbar.querySelectorAll('a.nav-link')];
let count = 0;
links.forEach(link => {
    if (location.hash === link.getAttribute('href')) {
        link.classList.add('active');
        count++;
    }
    else {
        link.classList.remove('active');
    }
    link.addEventListener('click', () => {
        link.classList.add('active');
        const other = links.filter(item => item.getAttribute('href')!==link.getAttribute('href'));
        other.forEach(item => {
            item.classList.remove('active');
        })
    })
})
if (!count) {
    links[0].classList.add('active');
}

const options = {
    // Optional parameters
    loop: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Keyboard Control
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Responsive breakpoints
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
}

// Initialize Swiper's
const swiper = new Swiper('.feedback-swiper', options);
const swiper2 = new Swiper('.screenshots-swiper', {
    ...options,
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        640: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        }
    }
});

setInterval(() => {
    swiper.slideNext();
    swiper2.slideNext();
}, 1500);
