// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//     sections.forEach(section => {
//         let top = window.scrollY;
//         let offset = section.offsetTop - 150;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector("header nav a[href*=' + id + ']").classList.add("active");
//             })
//         }
//     })
// }
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navbar.classList.toggle("active")
// }


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Fonction qui gère l'état du menu au clic sur l'icône
menuIcon.onclick = () => {
    // Si le menu est ouvert, on le ferme et on change l'icône, sinon on l'ouvre
    menuIcon.classList.toggle("bx-x"); 
    navbar.classList.toggle("active");
}

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
            const activeLink = document.querySelector(`header nav a[href*='${id}']`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

// Fermeture automatique du menu mobile après le clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Si le menu est ouvert (classe 'active' sur la navbar), on le ferme
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove("bx-x"); // Réinitialiser l'icône du menu
        }
    });
});
