/*==============taggle icon navbar=============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================= scroll sections active link=========*/
let section = documen.queryselectionAll('section');
let navlinks = documen.queryselectionAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
            });
        };
    });
    /*================= sticky navbar===============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*============== remove taggle icon and navbar when click navbar link (scroll)=============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*================= scroll reveal===============*/
ScrollReveal({
        reset: true,
        distance: '80px',
        duratioin: 2000,
        delay: 200 
});

ScrollReveal().reveal('.home-content, ,heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, about-img ', { origin: 'left' });