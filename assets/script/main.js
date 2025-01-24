"use strict";

//Nav
//Sticky NavBar:

$(window).scroll(function(){

    let scroll = $(this).scrollTop();

    if (scroll > 100){
        $("nav").addClass('sticky');
    }else{
        $("nav").removeClass('sticky');
    }
});
//////////////////  END   /////////////////////////

// Variables pour l'animation
const diplome = document.getElementById("diplome");
let startTime; // Temps de départ de l'animation

// Fonction d'animation avec rebond constant et continu
function bounceAnimation(timestamp) {
    if (!startTime) startTime = timestamp; // Enregistrer le temps de départ

    // Calcul de la durée écoulée
    const elapsedTime = timestamp - startTime;

    // Paramètres de l'animation
    const bounceHeight = 10; // Hauteur constante du rebond (en pixels)
    const duration = 5000; // Durée d'un cycle complet de rebond (en ms)

    // Calcul du mouvement vertical basé sur une sinusoïde (rebond constant)
    const yPosition = bounceHeight * Math.abs(Math.sin((elapsedTime / duration) * Math.PI * 2));

    // Appliquer la position à l'élément
    diplome.style.transform = `translateY(${yPosition}px)`;

    // Continuer l'animation (rebond infini)
    requestAnimationFrame(bounceAnimation);
}

// Démarrer l'animation en boucle une fois le DOM chargé
document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(bounceAnimation);
});
//////////////////  END   /////////////////////////


// Footer 
// Create map:

const centroid = [50.691086, 4.383902];
const map = L.map('mapid').setView(centroid, 15);

//Add tiles & marker:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([50.691086, 4.383902]).addTo(map);