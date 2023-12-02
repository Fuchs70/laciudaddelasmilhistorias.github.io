// Obtener el elemento del año
const yearElement = document.getElementById('year');

// Obtener el año actual
const currentYear = new Date().getFullYear();

// Establecer el año actual en el elemento
yearElement.textContent = currentYear;


//Slidder

let currentIndex = 0;

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = document.querySelectorAll('.slide').length - 1;
    }
    updateSlider();
}

function nextSlide() {
    if (currentIndex < document.querySelectorAll('.slide').length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}



    document.addEventListener("DOMContentLoaded", function () {
        var navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

        navbarLinks.forEach(function (navbarLink) {
            navbarLink.addEventListener("click", function () {
                var navbarToggler = document.querySelector(".navbar-toggler");
                var navbarCollapse = document.querySelector(".navbar-collapse");

                // Cierra el menú si está abierto
                if (navbarCollapse.classList.contains("show")) {
                    navbarToggler.click();
                }
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        var header = document.querySelector('header');

        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                // La página ha sido desplazada, agrega la clase 'scroll'
                header.classList.add('scroll');
            } else {
                // La página está en la parte superior, quita la clase 'scroll'
                header.classList.remove('scroll');
            }
        });
    });