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


// Footer 
// Create map:

const centroid = [50.691086, 4.383902];
const map = L.map('mapid').setView(centroid, 15);

//Add tiles & marker:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([50.691086, 4.383902]).addTo(map);