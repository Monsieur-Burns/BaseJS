console.log("depart JS");


function direBonjour(prenom) {
  var message =  "Bonjour " + prenom + " !";
  return  message;
}


console.log("Start Program");
console.log(direBonjour("Olivier"));
//console.log(direBonjour("Martin"));
console.log("End Program");

//
// function sayHello(prenom, nom) {
//   return "Bonjour " + prenom + " " + nom + " !";
// }
// var firstName = prompt("Saissiez votre prénom");
// var lastName = prompt("Saissez votre nom")
// console.log(sayHello(firstName, lastName));
//

// Renvoie le carré d'un nombre
function carre(x) {
  return x * x;
}

console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25

for (var i = 0; i <= 10; i++) {
  console.log(carre(i));
}


function min(x,y){
  if (x < y) {
    return x;
  }else {
    return y;
  }
}



console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1


function calculer(x,signe,y) {
  if (signe == "+") {
    return x+y;
  }else if (signe == "-") {
    return x-y;
  }else if (signe == "*") {
    return x*y;
  }else if (signe == "/") {
    return x/y;
  }

}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity

//
// OU
//
function calculer2(x, operation, y) {
    var resultat;
    switch (operation) {
    case "+":
        resultat = x + y;
        break;
    case "-":
        resultat = x - y;
        break;
    case "*":
        resultat = x * y;
        break;
    case "/":
        resultat = x / y;
        break;
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity



function perimetre(x) {
  return 2 * Math.PI * x;
}

function aire(x) {
  return (Math.PI*(x*x));
}

//var rayon = prompt("saissiez le rayon du cercle");
//console.log(perimetre(rayon));
//console.log(aire(rayon));


var mot = "kangourou des iles";
var longueur = mot.length;

console.log(longueur);
console.log(mot.length);


var mots2 = "Le kangourou Des Iles";//retrouver l'indice d'un caractère
var miniuscule = mots2.toLowerCase();
var majuscule = mots2.toUpperCase();

console.log(miniuscule,majuscule);


var motSaisi = "Olivier";
console.log(motSaisi === "olivier");
console.log(motSaisi.toLowerCase() === "olivier");
// attention comparaison case sensitive
//

// le premier indice d"un caractère est 0 et non 1 !!!
//retrouver un caractère selon son indice
var mot3 = "maChaineDeCaractere";
console.log(mot3.charAt(5));
// ou
console.log(mot3[5]);

//cacluler le dernier indice d'un mot > logueur  - 1
console.log("dernier indice du mot " + (Number(mot3.length)-1));

var prenom = "Olivier";
for (var i = 0; i < prenom.length; i++) {
  console.log(prenom[i]);
}


var saisie = prompt("Saisir un mot");
console.log(saisie + " contient " + saisie.length + " caractères");
console.log("Il s'écrit en minuscule " + saisie.toLowerCase());
console.log("il s'écrit en majuscule " + saisie.toUpperCase());



function compterNbVoyelle(varSaisie) {
  var nbVoyelle = 0;
  varSaisie = varSaisie.toLowerCase();
  for (var i = 0; i < varSaisie.length; i++) {
    if ((varSaisie[i] === "a") || (varSaisie[i] === "e") || (varSaisie[i] === "i") || (varSaisie[i] === "o")|| (varSaisie[i] === "u") || (varSaisie[i] === "y") ) {
      nbVoyelle++;
    }
  }return nbVoyelle;
}
console.log("il contient " + compterNbVoyelle(saisie) + " voyelles et " + (saisie.length - compterNbVoyelle(saisie)) + " consonnes");


function inverser(mot) {
  var motInverse = "";
  for (var i = 0; i < mot.length; i++) {
    //console.log(mot[i]);
    motInverse = mot[i] + motInverse;
  }
  return motInverse;
}

console.log("Il s'écrit à l'envers " + inverser(saisie));

inverse = inverser(saisie);
if (saisie.toLowerCase() == inverse.toLowerCase()) {
  console.log("C'est un palindrome !");
}else {
  console.log("Ce n'est pas un palindrome !");
}

function trouverLettreLeet(lettre) {
  lettre = lettre.toLowerCase();
    switch (lettre) {
      case "a":
        lettre = "4";
        break;
      case "b":
        lettre = "8";
        break;
      case "e":
        lettre = "3";
        break;
      case "l":
        lettre = "1";
        break;
      case "o":
        lettre = "0";
        break;
      case "s":
        lettre = "5";
        break;
    }return lettre;
}

function convertirEnLeet(mot) {
  mot = mot.toLowerCase();
  motLeet = "";
  for (var i = 0; i < mot.length; i++) {
    lettreLeet = trouverLettreLeet(mot[i]);
    motLeet = motLeet + lettreLeet;
  }return motLeet;
}

//console.log(trouverLettreLeet("o"));
console.log("Il s'écrit en leet speak " + convertirEnLeet(saisie));


/*
*/
