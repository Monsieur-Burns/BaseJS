console.log("JS Start...");


//Création de l'objet

var monObjet = {
  property1 : "A",
  property2 : 0,
  property3 : true
};
monObjet.property4 = false;

//Syntaxe notation mointée objet.property
console.log("la propriété 1 de mon objet est " + monObjet.property1);
console.log("la propriété 2 de mon objet est " + monObjet.property2);
console.log("la propriété 3 de mon objet est " + monObjet.property3);
console.log("la propriété 4 de mon objet est " + monObjet.property4);

//Syntaxe autre
//console.log("la propriété 1 de mon objet est " + monObjet["property1"]);
//console.log("la propriété 1 de mon objet est " + monObjet["property2"]);
//console.log("la propriété 1 de mon objet est " + monObjet["property3"]);



var stylo = {
  type : "Bille",
  couleur : "Bleu",
  marque : "Bic"
};


console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur + " !");

// Modification de la propriété couleur
stylo.couleur = "Rouge";

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur + " !");

// Rajouter dynamiquent un nouvelle propriété Prix

stylo.prix = 2.5;
console.log("Son prix est de " + stylo.prix + " euros");

console.log("#########################################################");


var perso = {
  nom : "Burnsy",
  vie : 150,
  force : 25,
};

console.log(perso.nom + " à " + perso.vie + " points de vie et " + perso.force + " points de force !");

//Burnsy est blessé
perso.vie = perso.vie - 20;

//Burnsy trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.nom + " à " + perso.vie + " points de vie et " + perso.force + " points de force !");
console.log("#########################################################");
// Créer une methode/fonction pour décrire  leperso de manière externe
/*
function descrire(personnage) {
  var description = personnage.nom + " à " + personnage.vie + " points de vie et " + personnage.force + " points de force !";
  return description;
}

console.log(descrire(perso));
*/

//Ou intégrer la méthode directement dans l'objet
 var perso = {
   nom : "Burnsy",
   vie : 150,
   force : 25,
   decrire : function () {
     var description = this.nom + " à " + this.vie + " points de vie et " + this.force + " points de force !";
     return description;
   },
 };

console.log(perso.decrire());

//Burnsy est blessé
perso.vie = perso.vie - 20;
//Burnsy trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());
console.log("#########################################################");


// TODO : ajoutez ici la définition de l'objet perso
//
var perso = {
  nom : "Burnsy",
  vie : 150,
  force : 25,
  xp : 15,
  decrire : function () {
    var description = this.nom + " à " + this.vie + " points de vie, " + this.force + " points de force et " + this.xp + " point d'exp";
    return description;
  },
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());
console.log("#########################################################");

// TODO : ajoutez ici la définition de l'objet chien
//
var chien = {
  nom : "Crockdur",
  race : "Caniche",
  taile : 75,
  aboyer : function () {
    cri = "Grrr ! Grrr !";
    return cri;
  }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

console.log("#########################################################");
/*
var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
//
var cercle = {
  rayon : r,
  perimetre : function () {
    return 2 * Math.PI * this.rayon;
  },
  aire : function () {
    return (Math.PI*Math.pow(this.rayon,2));
  },
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
*/
console.log("#########################################################");
/*
var compte = {
  titulaire : "Alex",
  solde : 0,
  crediter : function (montant) {
    this.solde = this.solde + montant;
  },
  debiter : function (montant) {
    this.solde = this.solde - montant;
  },
  decrire : function () {
    description = "Titulaire " + this.titulaire + ", solde : " + this.solde + ".";
    return description;
  }
};

console.log(compte.decrire());
var credit = Number(prompt("Saisir le montant à créditer"));
compte.crediter(credit);
var debit = Number(prompt("Saisir le montant à créditer"));
compte.debiter(debit);
console.log(compte.decrire());
*/
console.log("#########################################################");

var objetUn ={
  a : 2,
};

// Crée unAutreObjet avec unObjet comme prototype
var objetDeux = Object.create(objetUn);
console.log(objetDeux.a);

var objetTrois = Object.create(objetDeux);
console.log(objetTrois.a);
console.log(objetTrois.b);

console.log("#########################################################");

//prototype Personnage
var Personnage = { //on met un majuscule d'abord dans le cas d'un prototype
  nom : "",
  sante : 0,
  force : 0,
  xp : 0,
  decrire : function () {
    var description = this.nom + " à " + this.sante + " points de vie, " + this.force + " points de force et " + this.xp + " point d'exp";
    return description;
  },
};

var persoUn = Object.create(Personnage);
persoUn.nom = "Burns";
persoUn.sante = 150;
persoUn.force = 25;

var persoDeux = Object.create(Personnage);
persoDeux.nom = "Montgomery";
persoDeux.sante = 200;
persoDeux.force = 35;

console.log(persoUn.decrire());
console.log(persoDeux.decrire());

console.log("#########################################################");
console.log("#########################################################");
/// Répétitif
/// On peut créer une methoed d'initialmisation dans le prototype et passer les valeur en paramètre
///
var Personnage = {
  init : function (nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0;
  },
  decrire : function () {
    var description = this.nom + " à " + this.sante + " points de vie, " + this.force + " points de force et " + this.xp + " point d'exp";
    return description;
  },
};

var persoUn = Object.create(Personnage);
persoUn.init("Burns",200,25);
var persoDeux = Object.create(Personnage);
persoDeux.init("Montgomery",200,35);

console.log(persoUn.decrire());
console.log(persoDeux.decrire());

console.log("#########################################################");
console.log("*********************************************************");
console.log("#########################################################");

// creation d'un prototype personnage, et création des prototype joueur et adversaire
//


// prototype personnage
var Personnage = {

  initPerso : function (nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.inventaire = {
      or : 10,
      clef : 1,
    };
  },
  attaquer : function (cible) {
    if (this.sante > 0) {
      var degats = this.force;
      console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégats");
      cible.sante = cible.sante - degats;
      if (cible.sante > 0) {
        console.log(cible.nom + " à encore " + cible.sante + " points de vie");
      }else {
        cible.sante = 0;
        console.log(cible.nom + " est mort !");
      }
    }else {
      console.log(this.nom + " ne peut attaquer car il est mort...");
    }
  },
};

//Objet Joueur
var Joueur = Object.create(Personnage);
Joueur.initJoueur = function(nom, sante, force){
  this.initPerso(nom, sante, force);
  this.xp = 0;
};
Joueur.decrire = function () {
  description =  this.nom + " à " + this.sante + " points de vie, " + this.force + " points de force, " + this.xp + " point d'exp, " + this.inventaire.or + " pièces d'or et " + this.inventaire.clef + " clé(s) !";
  return description;
};
Joueur.combattre = function (adversaire) {
  this.attaquer(adversaire);
  if (adversaire.sante === 0) {
    console.log(this.nom + " a tué " + adversaire.nom + " et a gagné " + adversaire.valeur + " point d'exp ainsi que " + adversaire.inventaire.or + " pièces d'or et " + adversaire.inventaire.clef + " clé(s)" );
    this.xp += adversaire.valeur;
    this.inventaire.or += adversaire.inventaire.or;
    this.inventaire.clef += adversaire.inventaire.clef;
    adversaire.inventaire.or = 0;
    adversaire.inventaire.clef = 0;
  }
};



//Objet Adversaire
var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
  this.initPerso(nom, sante, force);
  this.race = race;
  this.valeur = valeur;
};


//Initialisation des Joueur
var joueurUn = Object.create(Joueur);
joueurUn.initJoueur("Burns", 150, 25);

var joueurDeux = Object.create(Joueur);
joueurDeux.initJoueur("Montgo", 130, 30);

console.log("Bienvenue dans le Jeu ! Voici les Joueurs :");
console.log(joueurUn.decrire());
console.log(joueurDeux.decrire());

//Initialisation des adversaires
var adversaireUn = Object.create(Adversaire);
adversaireUn.initAdversaire("Zorg the Orc", 40, 20, "Orc", 10);

console.log("Un adversaire arrive, c'est un " + adversaireUn.race + " nommé " + adversaireUn.nom);


// Phase d'attaque

adversaireUn.attaquer(joueurUn);
adversaireUn.attaquer(joueurDeux);

joueurUn.combattre(adversaireUn);
joueurDeux.combattre(adversaireUn);

console.log(joueurUn.decrire());
console.log(joueurDeux.decrire());


console.log("#########################################################");
console.log("---------------------------------------------------------");
console.log("#########################################################");



// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
  nom : "",
  race : "",
  taille : 0,
  init : function (nom, race, taille) {
    this.nom = nom;
    this.race = race;
    this.taille = taille;
  },
  aboyer : function () {
    if (this.taille < 50) {
      cri = " Kai ! Kai !";
    }else {
      cri = " Grrr ! Grrrr !";
    }
    return cri;
  },
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());

console.log("#########################################################");
console.log("*********************************************************");
console.log("#########################################################");

// TODO : ajoutez ici la définition des objets nécessaires
//

var CompteBancaire  = {
  initCB : function (nom, solde) {
    this.nom = nom;
    this.solde = solde;
  },
  decrire : function () {
    description = " Titilaire : " + this.nom + ", solde : " + this.solde + " euros.";
    return description;
  },
  debiter : function (montant) {
    this.solde -= montant;
  },
  crediter : function (montant) {
    this.solde += montant;
  },
};

var CompteEpargne = Object.create(CompteBancaire);

CompteEpargne.initCE = function (nom, solde, taux) {
  this.initCB(nom, solde);
  this.taux = taux;
};
CompteEpargne.ajouterInterets = function () {
  this.solde = this.solde + (this.solde * this.taux);
};






var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());


var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());





/**/
