document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".barra-nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            links.forEach(otherLink => {
                otherLink.classList.remove("activo");
            });

            link.classList.add("activo");

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        links.forEach(link => {
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionBottom = sectionTop + targetSection.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    link.classList.add("activo");
                } else {
                    link.classList.remove("activo");
                }
            }
        });
    });
});



const typed = new Typed('.typed', {
    strings: [
        '<i>Front-end Developer.</i>',
        '<i>Freelancer.</i>'
    ],
    typeSpeed: 70,
    startDelay: 300,
    backSpeed: 75,
    shuffle: false,
    backDelay: 1200,
    loop: true,
    loopCount: false,
    showCursor: '|',
    contentType: 'html',
});

const puntos = new Typed('.puntos', {
    strings: [
        '<i>...</i>'
    ],
    typeSpeed: 70,
    startDelay: 300,
    backSpeed: 75,
    shuffle: false,
    backDelay: 1200,
    loop: true,
    loopCount: false,
    showCursor: '|',
    contentType: 'html',
});

document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector('.barra-nav');
    var scrollPos = 0;

    window.addEventListener('scroll', function() {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 5) {

            nav.classList.add('scrolled'); 
        } else {
  
            nav.classList.remove('scrolled'); 
        }

        scrollPos = currentScrollPos;
    });
});

