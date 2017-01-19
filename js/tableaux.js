console.log("Start JS");
console.log("-----------------------------------------------------------------------");


var tabFilm = ["Film 1", "Film 2", "Film 3", "Film 4"];
console.log(tabFilm.length);

console.log(tabFilm[0]);
console.log(tabFilm[1]);
console.log(tabFilm[2]);

console.log("-----------------------------------------------------------------------");

for (var i = 0; i < tabFilm.length; i++) {
  console.log(tabFilm[i]);
}

console.log("-----------------------------------------------------------------------");

tabFilm.forEach(function (film){
  console.log(film);
});

console.log("-----------------------------------------------------------------------");

tabFilm.push("Film 5");

console.log(tabFilm[4]);

console.log("-----------------------------------------------------------------------");


var Film = {
  initFilm : function (nom, annee) {
    this.nom = nom;
    this.annee = annee;
  },
  decrire : function () {
    var description = this.nom + " (" + this.annee + ")";
    return description;
  },
};

var film1 = Object.create(Film);
film1.initFilm("Alien 1",1995);

var film2 = Object.create(Film);
film2.initFilm("Alien 1",1997);

var film3 = Object.create(Film);
film3.initFilm("Alien 3",2000);

var listeFilm = [];
listeFilm.push(film1, film2, film3);
// listeFilm.push(film2);
// listeFilm.push(film3);

listeFilm.forEach(function(film) {
  console.log(film.decrire());
});


console.log("-----------------------------------------------------------------------");


var mousquetaires = ["Atos", "Portos", "Aramis"];
console.log("Voici les Mousquetaires");
for (var i = 0; i < mousquetaires.length; i++) {
  console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");
console.log("A présent ils sont quatre !");

mousquetaires.forEach(function (mousquetaire) {
  console.log(mousquetaire);
});

console.log("-----------------------------------------------------------------------");

var valeurs = [11,3,7,2,9,10];
var somme = 0;

for (var i = 0; i < valeurs.length; i++) {
  somme += valeurs[i];
}

console.log("La somme des éléments vaut " + somme);

console.log("-----------------------------------------------------------------------");
var max = 0;
for (var i = 0; i < valeurs.length; i++) {
  if (valeurs[i] > max) {
    max = valeurs[i];
  }
}
console.log("Le maximum des éléments vaut " + max);

console.log("-----------------------------------------------------------------------");

var mot = "";
var saisie = [];
while (mot !== "stop" ) {
  mot = prompt('Saisir un mot');
  if (mot !== "stop") {
    saisie.push(mot);
  }
}

saisie.forEach(function (motSaisi){
  console.log(motSaisi);
});

console.log("-----------------------------------------------------------------------");

var Movies = {
  initMovies : function (nom, annee, realisateur) {
    this.nom = nom;
    this.annee = annee;
    this.realisateur = realisateur;
  },
  decrireMovies : function () {
    var description = this.nom + " ( " + this.annee + ", " + this.realisateur + ")";
    return description;
  }
};

var moviesList = [];

var movie1 = Object.create(Movies);
movie1.initMovies("Le loup de Wall Street", 2013, "Martin Scorcese");
var movie2 = Object.create(Movies);
movie2.initMovies("Vice-Versa", 2015, "Pete Docter");
var movie3 = Object.create(Movies);
movie3.initMovies("Babysitting", 2013, "Philippe Lachau et Nicolas Benamou");

moviesList.push(movie1, movie2, movie3);

moviesList.forEach(function (film) {
  console.log(film.decrireMovies());
});

console.log("-----------------------------------------------------------------------");

var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var chien1 = Object.create(Chien);
chien1.init("Crockdur", "Matin de Naple", 75);
var chien2 = Object.create(Chien);
chien2.init("Pupuce", "Bichon", 22);
var chien3 = Object.create(Chien);
chien3.init("Médor", "Labrador", 58);

var chenil = [chien1,chien2,chien3];

console.log("Le chenil héberge " + chenil.length + " chien(s)");
chenil.forEach(function (chien) {
  console.log(chien.nom + "est un " + chien.race + " mesurant " + chien.taille + " cm. Il aboie : " + chien.aboyer());
});


/**/
