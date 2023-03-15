var maVariable = "Bonjour";//Création d'une variable
var myNumber = 45; // int
var isAwake = true; // bool 

console.log('Hello World');//Print ce qu'on dit entre les ()
console.log("Print d'une variable :", maVariable);//Print la variable def avant
console.log("Print d'un typeof :", typeof isAwake);//Donner le type d'une variable

let text1 = 'Ceci est une chaine de carcatères'; // def text1
//var, let et const pour def des variables

const pi = 3.14; // création d'une varibale constante
const tab = []; //même si c'est un tableau on peut push des choses de dans

//////// MAUVAISE PRATIQUE ////////
tab.push(4, 'test', 123, true); // on peut ajouter ce qu'on veut dans le tab
console.log("Print du tab :", tab);


/////// TABLEAUX //////// 
const myArray = [1,2,4, 'hello']; // création d'un tableau avec des éléments
console.log(myArray);//afficher le tableau dans la console
console.log(myArray.length);//affichier la longueur du tab

const nouvelleLonguerTableau = myArray.push('new element');
//ajout de la valeur dans myArray + la variable nouvelleLongueurTableau prends pour valeurs 
//la nouvelle longueur de myArry

console.log(myArray);//affichage de myArray dans la console
console.log(nouvelleLonguerTableau);//affichage de la longueur du tableau

myArray[0] = 'test'; //changement de la premiere variable du tableau
// même si il est en const CAR c'est le tablea et pas les valeurs qui sont en const
console.log(myArray);

myArray[0] = [1,2,3]; // ajout d'un tab dans le tab
console.log(myArray);


myArray.splice(1,2);// supprime des éléments
console.log(myArray);



myArray.splice(1,2, 'test');// supprime des éléments
console.log(myArray);
myArray.splice(1,0,'deuxieme test');// supprime des éléments
console.log(myArray);