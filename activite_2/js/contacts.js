/*
Activité : gestion des contacts
*/

// TODO : complétez le programme
//

// Message de bienvenue
console.log("Bienvenue dans le gestionaire de contact !");

// Initialisation du message de liste des choix
var listeDesChoix = function () {
  console.log("\n1 : Lister les contacts");
  console.log("2 : Ajouter un contact");
  console.log("0 : Quitter\n ");
};

//Appel mu message de liuste des choix
listeDesChoix();

// Création de l'ojet contact
var Contact = {
  initContact : function (nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  decrire : function () {
    var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
    return description;
  }
};

//Initialisation des contacts par défaut
var contact1 = Object.create(Contact);
contact1.initContact("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.initContact("Nelsonne", "Mélodie");

//Initualisation du tableau de contacts
var tableauDeContact = [];

//Saisie des contacts par défaut dans le tableau de contacts
tableauDeContact.push(contact1, contact2);

//création de la fonction pour le choix 1 : Lister les contact
listerContacts = function () {
  tableauDeContact.forEach(function(contact){
    console.log(contact.decrire());
  });
};

//création de la fonction pour le choix 2 : Ajouter contact
ajouterContact = function () {
  var nom = prompt("Saissez le Nom");
  var prenom = prompt("Saissez le Prénom");
  var contact = Object.create(Contact);
  contact.initContact(nom, prenom);
  tableauDeContact.push(contact);
  console.log("le contact a bien été ajouté");
};

//Départ programme
//
var choix = Number(prompt("Saisseez votre choix"));

while ((choix == 1) || (choix == 2)) {
  if (choix == 1) {
    listerContacts();
    listeDesChoix();
    choix = Number(prompt("Saisseez votre choix"));
  }else if (choix == 2) {
    ajouterContact();
    listeDesChoix();
    choix = Number(prompt("Saisseez votre choix"));
  }else {
    console.log("Erreur de saisie, Saisissez 0, 1 ou 2");
    choix = Number(prompt("Erreur de saisie, Saisissez 0, 1 ou 2"));
  }
}
if (choix === 0) {
  console.log("Programme terminé");
}
