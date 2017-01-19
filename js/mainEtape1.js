

console.log("départ js");
console.log("Do some Math");
console.log(3+2);
console.log(12/0);
console.log("Bye by dude !");


// présentation
console.log("Olivier");
console.log(42);


// Calculette
console.log(6+3);
console.log(6-3);
console.log(6*3);
console.log(6/3);


// Valeurs
console.log(4+5);
console.log("4 + 5");
console.log("4" + "5");


// Variables
var a;
console.log(a);
var a = 3.14;
console.log(a);
var a = 3.14156;
console.log(a);


var b = 5;
b += 2;
console.log(b);
b++;
console.log(b);


var c = 3;
var d = c;
//var d = d + 1;
//d += 1;
d++;
console.log(c);
console.log(d);

var e = 3 + 2 * 4;
console.log(e);
e = (3 +2) * 4;
console.log(e);

var f = 100;
console.log("la valeur de f = " + f);

var g = "cinq" *2;
console.log(g);

var h = "5"; // cinq est défini comme un string
console.log(h + 1); //=>cocanrénation, addition d'un string et d'un integer
h = Number("5"); // Numebr redéfini la variable comme integer
console.log(h + 1);


var prenom = prompt("Saisi le prénom");
console.log(prenom);
alert("Bonjour " + prenom);

var saisie1 = prompt('Entre un nombre'); //le nombre saisi sera considéré comme string
saisie1 = Number(saisie1); // Number() va typer la variable en integer
//Autre syntaxe
var saisie2 = Number(prompt("Saisi un nombre"));
console.log("saisie1 = " + saisie1 + ", saisie2 = " + saisie2);


var prenom = prompt("Saisiez votre prénom");
var nom = prompt("Saisissez votre nom");
alert("Bonjour, " + prenom + " " + nom);


var a = 2;
a = a - 1;
a++;
var b = 8;
var c = a + b * b;
var d = a * b + b;
var e = a *(b + b);
var f = a * b / a;
var g =  b /a *a;

var prixHT = Number(prompt("Saisisez le montant HT"));
alert("Le prix TTC est de " + ((prixHT * 19.6/100) + prixHT));

var TempC = Number(prompt("Saisissez la temperature Celcius"));
alert("La temperature Farenheit est de " + (TempC * 9/5 + 32));

var nbr1 = 5;
var nbr2 = 3;
console.log("nbr1 = " + nbr1 + " et nbr2 = " + nbr2);

var tmp1 = nbr1;
var tmp2 = nbr2;

nbr1 = tmp2;
nbr2 = tmp1;

console.log("nbr1 = " + nbr1 + " et nbr2 = " + nbr2);
