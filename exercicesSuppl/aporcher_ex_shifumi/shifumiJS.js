let imageGauche = document.getElementById("imageGauche");
let imageDroite = document.getElementById("imageDroite");
let rejouer = document.getElementById("rejouer");
let resultatGauche = document.getElementById("resultatGauche");
let resultatDroite = document.getElementById("resultatDroite");
let choixCiseaux = document.getElementById("choixCiseaux");
let choixPierre = document.getElementById("choixPierre");
let choixFeuille = document.getElementById("choixFeuille");
let navbar = document.getElementById("navbar");
let jeuxGauche = document.getElementById("jeuxgauche")

imageGauche.addEventListener("mouseover", () =>{
    navbar.style.display = 'initial'
    imageGauche.style.display = "none"
    resultatGauche.style.display="none"
});
jeuxGauche.addEventListener("mouseleave", () =>{
    navbar.style.display = 'none'
    imageGauche.style.display = ""
    resultatGauche.style.display=""
});