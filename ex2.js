//EX1 
// Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

console.log("\n======== EX1 =========");

function sumFunction(n1,n2) {
    return n1+n2;
}
console.log(sumFunction(3,4));

//EX2 
//Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau. 

console.log("\n======== EX2 =========");
const myArray = [2,4,1,231,1424,424141,9];

function minTab(tableau) {
    return Math.max(...tableau);
}
console.log(minTab(myArray));

//EX3
//Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées. 

console.log("\n======== EX3=========");
let mySentence = "Ceci est un test avec bpc de voyelles.";

function delVoyelle(myString) {
    return myString.replace(/a|e|i|o|u|y/g,'');// remplace les lettres en paramêtre a/e/i/o/u/y par des ""
    // le /g sert a fair un Global Replace, il est indispenssable sinon ca ne marche pas
}
console.log(delVoyelle(mySentence));

console.log("/// CORRECTION ///");


function removeVoyels(myString) {
    return myString.replace(/[aieouy]/gi, '');// le g est obligatoire (remove toutes les occurencre)
    //i pour la case (sans celui-ci ne prends pas en compte les majs)
}

console.log(removeVoyels(mySentence));
//EX4
// Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triés par ordre alphabétique. 

console.log("\n======== EX4 =========");

const myLetters = ['z','c','f','d','a'];

function trierLettre(chaineCarrac) {
    return chaineCarrac.sort()
}

console.log(...trierLettre(myLetters)); 


//EX5 
//Ecrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux

console.log("\n======== EX5 =========");

const myEntier = 96;
const chiffres = ["un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize",'quatorze','quinze','seize']
const dixaine = ["","dix","vingt","trente","quarante","cinquante","soixante","soixante-dix","quatre-vingts","quatre-vingts-dix",'cent']

function goString(number, unites, dix) {
    if (number == 0){
        return "zéro";
    }
    else {
        if (number<16){
            console.log(unites[number-1]);
        }
        if (Math.floor(number/10) === 7){
            console.log(dix[Math.floor(number/10)-1]+"et"+unites[((number%10)-1)+10]);// + concaténation 
        }
        if ( Math.floor(number/10) === 9 ){
            console.log(dix[Math.floor(number/10)-1]+"-"+unites[((number%10)-1)+10]);
        }
        else{
            console.log(dix[Math.floor(number/10)]+"-"+unites[(number%10)-1]);
        }

    }
}

goString(myEntier,chiffres,dixaine); 

// EX 6
//Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.
console.log("\n======== EX6 =========");


const myObject = {
    firstname: 'Maxime',
    lastname: 'NONY',
    age: 18,
    hasDriverLicence: true, 
    placeOfBirth:'Lyon'
}

const arrayObject = [
    {   firstname : "Maxime", },
    {   age : "21", },
    {   lastname : "Test", },
    {   placeOfBirth : "Lyon", },
]

const someFunction = (ObjectArray, str) =>
{
    return ObjectArray.map((obj) =>obj[str])
    //retourne la valeur de str dans chacuns des objets contenu dans arr
}

console.log(someFunction(arrayObject,'age')); // prends en paramètre la liste et la clef de l'objet recherché


// EX 7 
//  Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant. 
console.log("\n======= EX 7 =========");

const numbersArr = [
    1,
    2,
    3,
    4,
    4545,
    231,
    1244
]
function sortDescending(numbers) {
    return numbers.sort((a ,b) => b - a)// trie par ordre décroissant grace au b - a 
    /* le signe de la soustraction de b - a, donne un signe qui est utilisé pour trier les ordres dans le tableau 
    trier */
    
}

const result = sortDescending(numbersArr);
console.log(...result);



// EX 8 
//Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules. 
console.log("\n======= EX 8 =========");
let captilazieSentence = "Ceci est un test";
const capitalizeVowels = (str) => {
    return str.replace(/[aieouy]/i, vowel => vowel.toUpperCase());
}

console.log(capitalizeVowels(captilazieSentence));
// EX 9
// Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

console.log("\n======= EX 9 =========");
const mySenteceToSort = "Ceci est la phrase fait pour";

const sortVoyells = (str) => {
    return str.match(/[aieouy]/gi || [], ).length;
}

console.log(sortVoyells(mySenteceToSort));


// EX 10 
// 
console.log("\n======= EX 10 =========");
let captilazieSentence2 = "Ceci est un test";
const capitalizeConsomns = (str) => {
    return str.replace(/[^aieouy]/i, cons => cons.toUpperCase());
}
console.log(capitalizeConsomns(captilazieSentence2));