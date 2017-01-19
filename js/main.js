console.log("Départ JS");




var nombre = Number(prompt("Saisir un chiffre"));

if (nombre > 0) {
  console.log(nombre + " est un nombre positif");
}
else if (nombre < 0) {
  console.log(nombre + " est négatif");
}
else {
  console.log(nombre + " est nul");
}

if ((nombre >= 0) && (nombre <= 100)) {
  console.log("La valeur est comprise entre 0 et 100");
}


if ((nombre < 0) || (nombre > 100)) {
  console.log("la valeur est hors de l'interval définie (0 à 100)");
}

if (!(nombre > 100)) {
  console.log("la valeur est inférieur a 100");
}



var meteo = prompt("Quel temps fait-il ?");
// if (meteo === "Soleil") {
//   console.log("Portez un t-shirt");
// }
// else if (meteo === "Vent") {
//   console.log("Portez un pull");
// }
// else if (meteo === "Pluie") {
//   console.log("Portez un parapluie");
// }
// else if (meteo === "Neige") {
//   console.log("Restez chez vous");
// }
// else {
//   console.log("Je n'ai pas compris");
// }

switch (meteo) {
  case "Soleil":
    console.log("Portez un t-shirt");
    break;
  case "Vent":
    console.log("Portez un pull");
    break;
  case "Pluie":
    console.log("Portez un parapluie");
    break;
  case "Neige":
    console.log("Restez chez vous");
    break;
  default:
    console.log("Je n'ai pas compris");
}

var jour = prompt("Quel jour sommes nous");
switch (jour) {
  case "lundi":
    console.log("Demain, nous serons Mardi");
    break;
  case "mardi":
    console.log("Demain, nous serons Mercredi");
    break;
  case "mercredi":
    console.log("Demain, nous serons Jeudi");
    break;
  case "jeudi":
    console.log("Demain, nous serons Vendredi");
    break;
  case "vendredi":
    console.log("Demain, nous serons Samedi");
    break;
  case "samedi":
    console.log("Demain, nous serons Dimanche");
    break;
  case "dimanche":
    console.log("Demain, nous serons Lundi");
    break;
}

var nbr1 = Number(prompt("saisir le premiere chiffre"));
var nbr2 = Number(prompt("saisir le deuxième chiffre"));
if (nbr1 > nbr2) {
  console.log(nbr1 + " est superieur à " + nbr2);
}
else if (nbr1 < nbr2) {
  console.log(nbr1 + " est inférieur à " + nbr2);
}
else {
  console.log(nbr1 + " est égal à " + nbr2);
}


var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
var nb3 = Number(prompt("Entrez nb3 :"));

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}


var note = Number(prompt("Saissir la note obtenue"));
if (note < 10) {
  console.log("Candidat récalé");
}else if ((note >=10) && (note <12)) {
  console.log("Candidat reçu");
}else if (note >= 12) {
  console.log("Candidat reçu avec mention");
}

var mois = Number(prompt("Saisir le numero du mois"));
if ((mois < 1) || (mois >12)) {
  console.log("ce mois n'existe pas");
}else {
  switch (mois) {
    case 1:
      console.log("il y a 31 jours dans le mois");
      break;
    case 2:
      console.log("il y a 28 jours dans le mois");
      break;
    case 3:
      console.log("il y a 31 jours dans le mois");
      break;
    case 4:
      console.log("il y a 30 jours dans le mois");
      break;
    case 5:
      console.log("il y a 31 jours dans le mois");
      break;
    case 6:
      console.log("il y a 30 jours dans le mois");
      break;
    case 7:
      console.log("il y a 31 jours dans le mois");
      break;
    case 8:
      console.log("il y a 31 jours dans le mois");
      break;
    case 9:
      console.log("il y a 30 jours dans le mois");
      break;
    case 10:
      console.log("il y a 31 jours dans le mois");
      break;
    case 11:
      console.log("il y a 30 jours dans le mois");
      break;
    case 12:
      console.log("il y a 31 jours dans le mois");
      break;


  }

}

var heure = Number(prompt("Saisir l'heure"));
var minute = Number(prompt("Saisir la minute"));
var seconde = Number(prompt("Saisir la seconde"));

if (((seconde >= 0) && (seconde <= 59)) || ((minute >= 0) && (minute <= 59)) || ((heure >= 0) && (seconde <= 23))) {
  if (seconde == 59) {
    //console.log("seconde 60 minute +");
    seconde = 0;
    minute++;
    if (minute == 60) {
      //console.log("minute 60 heure +");
      minute = 0;
      heure++;
      if (heure == 24) {
        //console.log("minuit");
        heure = 0;
      }
    }
  }else {
    //console.log("seconde +");
    seconde++;
  }
  console.log("Dans une seconde, ie sera " + heure + "H" + minute + "m et " + seconde + " secondes");
}else {
  console.log("Erreur de format");
}


console.log("start program");
var nbr = 1;
while (nbr <= 5) {
  console.log(nbr);
  nbr++;
}
console.log("end program");

console.log("start program");
for (var compteur = 1; compteur <= 5; compteur++) {
  console.log(compteur);
}
console.log("end program");

var lettre = "";
while (lettre !== "x") {
  lettre = prompt("saisir une lettre ou X pour sortir du while");
  console.log(lettre);
}

var lettre = "";
for (; lettre !== "X";) {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}// pas de sens, privilegier while puisque dans la for il n'y a ni init, ni étape


var tour = 1;
while (tour <= 10) {
  console.log("c'est le tour numero " + tour);
  tour++;
}


var nbrTour = prompt("Saisir le nombre de tour");

for (var tour = 1;  tour <= nbrTour; tour++) {
  console.log("c'est le tour numero " + tour);
}


for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }else {
      console.log(i + "est impair");
    }
}

var Nbr = Number(prompt("saisir le nbr initial"));

for (i=Nbr; i < Nbr + 10; i++) {
  if (i % 2 === 0) {
      console.log(i + " est pair");
  }else {
    console.log(i + " est impair");
  }
}

var nbrD = Number(prompt("Saisir un chiffre entre 50 et 100"));
while ((nbrD < 50) || (nbrD > 100)) {
  nbrD = Number(prompt("Saisir un chiffre entre 50 et 100"));
}
console.log("ok");


var multi = Number(prompt("Saisir un nombre entre 2 et 9"));

while ((multi < 2) || (multi > 9)) {
  var multi = Number(prompt("Saisir un nombre entre 2 et 9"));
}
console.log("Voici la table de multiplication de " + multi);
for (var i = 1; i <= 10; i++) {
  console.log(i + " x " + multi + " = " + (i * multi));
}


var reponse = prompt("Voulez vous jouer au ni Oui ni Non ?");
while ((reponse !== "oui") && (reponse !== "non")) {
  var reponse = prompt("Voulez vous jouer au ni Oui ni Non ?");
}
console.log("Vous avez perdu !");


// NON
for (var i = 1; i <= 7; i++) {
  switch (i) {
    case 1:
      console.log("#");
      break;
    case 2:
      console.log("##");
      break;
    case 3:
      console.log("###");
      break;
    case 4:
      console.log("####");
      break;
    case 5:
      console.log("#####");
      break;
    case 6:
      console.log("######");
      break;
    case 7:
      console.log("#######");
      break;
  }
}

//OUI
var ligne = "";
for (var i = 1; i <= 7; i++) {
  ligne = ligne + "#";
  console.log(ligne);
}



for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if ((i % 5 === 0)) {
      console.log("fizzbuzz");
    }else {
      console.log("fizz");
    }
  }else if ((i % 5 === 0)) {
    console.log("buzz");
  }else {
    console.log(i);
  }
}
