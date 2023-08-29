debugger;

function createStructure();

debugger;// on va écrire dans le body donc on le sélectionne

// creation d'une div

let mainDiv = document.createElement('div');

 

// ajout d'une class à la div

 mainDiv.classList.add("blockArt");

 

// creation d'une balise titre h1

let h1   = document.createElement('h1');

 

// ajout de texte

let texte1 = document.createTextNode('Langages basés sur ECMAScript :');

h1.appendChild(texte1)

// creation d'une image

let image   = document.createElement('img');

// ajout de l'attribut src

image.src = 'chaton.jpeg';

// modification de width pour être à 100%

image.style.width = '100%';

// creation d'un paragraphe

let paragraphe   = document.createElement('p');

// ajout de texte

let texte2 = document.createTextNode('Langages basés sur ECMAScript :');

paragraphe.appendChild(texte2)

//Ajout des blocks à blockDiv

mainDiv.appendChild(h1);

mainDiv.appendChild(image);

mainDiv.appendChild(paragraphe);

//Ajout de blockDiv au body

document.body.appendChild(mainDiv);