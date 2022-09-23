const navbar = document.getElementById("navbar");

// Scroll toggle top
const handleNavbarScroll = () => {
  if (window.scrollY > 5) {
    navbar.classList.add("bgc-primary", "toggle-top", "shadow");
  } else {
    navbar.classList.remove("bgc-primary", "toggle-top", "shadow");
  }
};

handleNavbarScroll();
window.addEventListener("scroll", handleNavbarScroll);

// Active Links
const handleActiveScroll = () => {
  let activeLink;
  const links = [...navbar.querySelectorAll("a.nav-link")];
  const sections = document.getElementsByClassName("section");
  [...sections].forEach((section) => {
    const link = links.find(
      (link) => link.getAttribute("href") === `#${section.id}`
    );
    if (section.offsetTop <= window?.scrollY + 100) {
      activeLink = link;
    }
  });

  links.forEach((link) => link.classList.remove("active"));
  activeLink?.classList.add("active");
};
handleActiveScroll();
window.addEventListener("scroll", handleActiveScroll);

// initialize aos
AOS.init({
  duration: 2000,
});

const options = {
  // Optional parameters
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Keyboard Control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
};

// Initialize Swiper's
const swiper = new Swiper(".feedback-swiper", options);
const swiper2 = new Swiper(".screenshots-swiper", {
  ...options,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

setInterval(() => {
  swiper.slideNext();
  swiper2.slideNext();
}, 1500);
