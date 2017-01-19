console.log("JS Start");
console.log("*******************************************************************");

var perso  = {
  nom : "Aurora",
  sante : 150,
  force : 25,
  xp : 0,
  decrire : function () {
    var description = this.nom + " à " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience.";
    return description;
  },
};

console.log(perso.decrire());

perso.sante = perso.sante - 20;
perso.force = perso.force + 10;
perso.xp = perso.xp + 15;

console.log(perso.decrire());


var perso2 = {
  nom : "Glacius",
  sante : 130,
  force : 30,
  xp : 0,
  decrire : function () {
    var description = this.nom + " à " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience.";
    return description;
  }
};


// Prototype
//

var objetUn = {
  a : 2,
};

var objetDeux = Object.create(objetUn);

console.log(objetDeux.a);

console.log("*******************************************************************");

// Proototype PERSONNAGE
//

var Personnage = {
  non : "",
  sante : 0,
  force : 0,
  xp : 0,
  decrire : function () {
    var description = this.nom + " à " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience." ;
    return description;
  },
};

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 30;

console.log(perso1.decrire());
console.log(perso2.decrire());

console.log("*******************************************************************");

var Personnage = {
  initPerso : function (nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0;
  },
  decrire : function () {
    var description = this.nom + " à " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience." ;
    return description;
  },
};

var perso1 = Object.create(Personnage);
perso1.initPerso("Aurora", 150, 25);

var perso2 = Object.create(Personnage);
perso2.initPerso("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());


console.log("*******************************************************************");

var Personnage = {
  initPerso : function (nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.inventaire = {
      or : 10,
      clef : 1
    };
  },
  attaquer : function (cible) {
    if (this.sante > 0) {
      var degat = this.force;
      console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degat + " points de dégats");
      cible.sante = cible.sante - degat;
      if (cible.sante > 0) {
        console.log(cible.nom + " a encore " + cible.sante + " points de  vie");
      }else {
        cible.sante = 0;
        console.log(cible.nom + " est mort !");
      }
    }else {
      console.log(this.nom + " ne peut pas attaquer car il est mort");
    }
  },
};

var Joueur = Object.create(Personnage);
Joueur.initJoueur = function (nom, sante, force) {
  this.initPerso(nom, sante, force);
  this.xp = 0;
};
Joueur.decrire = function () {
  var description = this.nom + " à " + this.sante + " points de vie, " + this.force + " en force, " + this.xp + " points d'expérience, " + this.inventaire.or + " pièces d'or et " + this.inventaire.clef + " clé(s)" ;
  return description;
};
Joueur.combattre = function (adversaire) {
  this.attaquer(adversaire);
  if (adversaire.sante === 0) {
    console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " points d'expérience, " + adversaire.inventaire.or + " pièces d'or et " + adversaire.inventaire.clef + " clé(s)");
    this.xp += adversaire.valeur;
    this.inventaire.clef += adversaire.inventaire.clef;
    this.inventaire.or += adversaire.inventaire.or;
  }
};

var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur){
  this.initPerso(nom, sante, force);
  this.race = race;
  this.valeur = valeur;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora",150,25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius",130,30);


console.log("Bienvenue dans le jeu d'aventure JSOO");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "Orc", 10);

console.log("Un adversaire arrive, c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());


console.log("*******************************************************************");

// TODO : ajoutez ici la définition de l'objet Chien

var Chien = {
  init : function (nom, race, taille) {
    this.nom = nom;
    this.race = race;
    this.taille = taille;
  },
  aboyer: function () {
    cri = "Wouarf ! Wouarf !";
    if (this.taille > 50) {
      cri = "Grrr ! Grrr !";
      return cri;
    }if (this.taille < 25) {
      cri = "Kai ! Kai !";
      return cri;
    }return cri;
  }
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 70);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());

console.log("*******************************************************************");



// TODO : ajoutez ici la définition des objets nécessaires
//
var CompteBancaire = {
  initCB : function(nom, solde) {
    this.nom = nom;
    this.solde = solde;
  },
  decrire : function(){
    var description = "Titulaire : " + this.nom + ", solde : " + this.solde;
    return description;
  },
  debiter :  function (valeur) {
    this.solde -= valeur;
  },
  crediter : function (valeur) {
    this.solde += valeur;
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

/*
*/











/**/
