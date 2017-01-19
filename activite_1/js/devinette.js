/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
//



var nombreSaisi = Number(prompt("Saisir un nombre entre 1 et 100"));
var nombreEssai = 1;
for (nombreEssai; (nombreEssai < 6) && (nombreSaisi != solution); nombreEssai++) {
    if (nombreSaisi == solution) {
      console.log("Bravo ! La solution était " + solution + ".\nVous avez trouvé au bout de " + nombreEssai +" essai(s)");
    }else if (nombreSaisi < solution) {
      console.log(nombreSaisi + " est trop petit");
      nombreSaisi = Number(prompt("Saisir un nombre entre 1 et 100"));
    }else if (nombreSaisi > solution) {
      console.log(nombreSaisi + " est trop grand");
       nombreSaisi = Number(prompt("Saisir un nombre entre 1 et 100"));
    }
}
if ((nombreEssai == 6) && (nombreSaisi != solution)) {
  console.log("Perdu... La solution était " + solution + " !");
}else if (nombreSaisi == solution) {
  console.log("Bravo ! La solution était " + solution + ".\nVous avez trouvé au bout de " + nombreEssai +" essai(s)" );
}



// Version avec controle du nombre saisi (1 à 100)


var nombreSaisi = Number(prompt("Saisir un nombre entre 1 et 100"));
var essai = 1;
for (essai; (essai <6) && (nombreSaisi != solution) && ((nombreSaisi >= 1) && (nombreSaisi <= 100)); essai++) {
    if (nombreSaisi == solution) {
      console.log("Bravo ! La solution était " + solution + ".\nVous avez trouvé au bout de " + nombreEssai +" essai(s)");
    }else if (nombreSaisi < solution) {
      console.log(nombreSaisi + " est trop petit");
      nombreSaisi = Number(prompt("Saisir un nombre entre 1 et 100"));
    }else if (nombreSaisi > solution) {
      console.log(nombreSaisi + " est trop grand");
      var nombreSaisi = Number(prompt("Saisir un nombre entre 1 et 100"));
    }
}
if ((essai == 6) && (nombreSaisi != solution)) {
  console.log("Perdu... La solution était " + solution + " !");
}else if (nombreSaisi == solution) {
  console.log("Bravo ! La solution était " + solution + ".\nVous avez trouvé au bout de " + nombreEssai +" essai(s)");
}else {
  console.log("Vous devez saisir un nombre entre 1 et 100, relancez le jeu.");
}
