//menu active navbar 
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = function() {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}



//sections active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");





window.onscroll = () => {
    //active links
    sections.forEach((section, num) => {
        let top = window.scrollY;
        let offset = section.offsetTop-150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`header nav a[href*='${id}']`).classList.add("active");
            })
        }
    })

    // sctiky navbar
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

// dark mode 
const darkMode = document.querySelector("#darkMode-icon");
console.log(darkMode)
    darkMode.onclick = () => {
        darkMode.classList.toggle("bx-sun");
        document.body.classList.toggle("dark-mode");
    }


//scroll reveal

ScrollReveal({
    reset: false,
    distance: "80px",
    duration: 1500,
    delay: 100,
})

ScrollReveal().reveal(".home-content, .heading", {origin: 'top'});
ScrollReveal().reveal(".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form", {origin: 'bottom'});


// swiper.js
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    grabCursor:true,
    scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });




