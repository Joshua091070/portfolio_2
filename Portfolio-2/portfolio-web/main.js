/* ================== menu icon navbar ==================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

/* ======================= dark mode =================== */

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
});

if(localStorage.getItem("theme") == "light"){
    darkModeIcon.classList.remove('bx-sun');
    document.body.classList.remove('dark-mode');
}

else if(localStorage.getItem("theme") == "dark"){
    darkModeIcon.classList.add('bx-sun');
    document.body.classList.add('dark-mode');
}

else {
    localStorage.setItem("theme", "light");
}

/* ================== scroll section active ==================== */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

/* ================== sticky navbar ==================== */
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);

    /* ============= remove menu icon navbar when click navbar link (scroll) ================ */

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
});


/* ================== swiper js ==================== */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/* ======================= scroll reveal =================== */
ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 200 
});


// ScrollReveal().reveal('', { origin: "bottom" });
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p", { origin: "right" });
ScrollReveal().reveal(".about-content h3, .about-content p", { origin: "right" });
ScrollReveal().reveal(".portfolio-container", { origin: "bottom" });
// ScrollReveal().reveal(".about-content h3, .about-content p", { origin: "bottom" });
ScrollReveal().reveal(".services-container, .about-content .btn", { origin: "bottom" });
ScrollReveal().reveal(".testimonial-wrapper, .home-image img", { origin: "bottom" });
ScrollReveal().reveal(".about-content btn, .contact form", { origin: "bottom" });






