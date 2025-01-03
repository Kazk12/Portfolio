
let navbarMobile = document.querySelector('.navbarMobile');
let navMobileLinks = document.querySelectorAll('.navbarMobile a');


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");



// Gestion du défilement et du changement d'état des liens de navigation
window.onscroll = () => {
    let top = window.scrollY;

    // Parcours des sections et mise à jour du lien actif
    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Retirer la classe 'active' de tous les liens
            });

            // Ajouter la classe 'active' au lien correspondant à la section visible
            const activeLink = document.querySelector(`.navbar a[href*='${id}']`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}












// Faire apparaitre le menu déroulant sur mobile, le faire disparaitre quand on clique sur un lien


menuIcon.addEventListener('click', () => {
  navbarMobile.classList.toggle('hidden');
  navMobileLinks.forEach(link => {
    link.addEventListener('click', () => {

        if (!navbarMobile.classList.contains('hidden')) {
            navbarMobile.classList.toggle('hidden');
        }
    });
});
});

