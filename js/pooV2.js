console.log("JS Start");
console.log("*******************************************************************");

// Création de l'objet et définition de ses propriétés
var stylo = {
  type : "Bille",
  couleur : "Bleu",
  marque : "Bic",
};

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// Changer la valeur de la propriété
stylo.couleur = "Rouge";
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

//Ajout dynamique d'un propriété
stylo.prix = 2.5;
console.log("il coute " + stylo.prix + " euros.");


console.log("*******************************************************************");

// Création d'un objet personnage
var perso = {
  nom : "Aurora",
  sante : 150,
  force : 25,
};

console.log(perso.nom + " à " + perso.sante + " point de vie et " + perso.force + " en force.");

// Auglentation de la valeur force
perso.force = perso.force + 10;
// Diminution de la valeur santé
perso.sante = perso.sante - 20;

console.log(perso.nom + " à " + perso.sante + " point de vie et " + perso.force + " en force.");

console.log("*******************************************************************");

// Création d'un methode qui renvoie la description du perso
var perso = {
  nom : "Aurora",
  sante : 150,
  force : 25,
  // Création d'un méthode qui renvoie la description du perso
  decrire : function() {
    var description = this.nom + " à " + this.sante + " point de vie et " + this.force + " en force.";
    return description;
  }
};

//Appel de la methode
console.log(perso.decrire());
// Auglentation de la valeur force
perso.sante = perso.sante - 20;
// Auglentation de la valeur force
perso.force = perso.force + 10;
console.log(perso.decrire());


console.log("*******************************************************************");

// Exercice
// ajouter un propriété XP qui doit apparaitre dans la description

perso.xp = 0;
perso.decrire = function() {
  var description = this.nom + " à " + this.sante + " point de vie et " + this.force + " en force et " + perso.xp + " points d'expérience";
  return description;
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());

console.log("*******************************************************************");

//  créer l'objet chien
// TODO : ajoutez ici la définition de l'objet chien

var chien = {
  nom : "Crockdur",
  race : "Matin de Naples",
  taille : 75,
  aboyer : function () {
    var cri = "Grr ! Grr !";
    return cri;
  },
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

console.log("*******************************************************************");

// Exercice Cercle
var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle

var cercle = {
  rayon : r,
  perimetre : function(){
    return 2 * Math.PI * this.rayon;
  },
  aire : function() {
    return (Math.PI*(Math.pow(this.rayon,2)));
  }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

console.log("*******************************************************************");

// Compte Bancaire

var compte = {
  nom : "Alex",
  solde : 0,
  crediter : function (credit) {
    this.solde += credit;
  },
  debiter : function (debit){
    this.solde -= debit;
  },
  decrire : function () {
    var description = "Titulaire : " + this.nom + ", solde : " + this.solde + " euros,";
    return description;
  }
};

console.log(compte.decrire());
var credit = Number(prompt("Saisir le montant a crediter"));
compte.crediter(credit);
var debit = Number(prompt("Saisir le montant a crediter"));
compte.debiter(debit);
console.log(compte.decrire());










/**/
