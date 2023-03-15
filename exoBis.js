const age = 18;
let newStatut = '';

if (age>= 18){
    newStatut = "Majeur";
}
else{
    newStatut = "Mineur";
}


const statut = (age>=18) ? "majeur" : "mineur"; //opérateur ternaire 
//condition ? valeurSiVrai : valeurSiFaux; 

console.log(statut);
console.log(newStatut);
const myArray = [1,3,4341,'odskqfq',true, 'test'];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

console.log("=========== LES OBJETS =============")
// La syntaxe des objets en JS 

let myObjets = {
    firstname : 'John',
    lastname : 'Doe',
    age : 45,
    mailVerrified : true
}

// Boucle pour parcourir l'objet

for (const key in myObjets) { // for in boucle
    const element = myObjets[key];// récuperer les clefs dans mon objet
    console.log(key)
    
}
console.log('========== LES FONCTIONS =========')
// déclaration de la fonction
function sumFunction (nb1,nb2) {
    return nb1 + nb2;
}
const sum2 = (a, b) => a + b 


console.log("Fonction 1 :", sumFunction(1,3));
console.log("Fonction 2 :", sum2(2,4));

console.log('========== LES FONCTIONS ASSINCRO =========')

setTimeout (
    function () {
        console.log('Hello, Wold!');
        
    }, 1000);

    console.log("Hello again");