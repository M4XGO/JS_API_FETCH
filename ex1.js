// EX 1 
// Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console. 
console.log("EXERCICE 1 :")

const myTab = [1,2,3,4,5,6,7,8,9,10]// création de mon tableau avec les éléments
for (let i = 0; i <myTab.length; i++){// boucle for qui s'éxecute le nombre de fois de la taille du tab
    console.log(myTab[i]); // affichage dans la console de chaques éléments à l'index i
}

//CORRECTION 
console.log("/// Correction ///");
myTab.forEach((numero)=>{
    console.log(numero)
})

// EX 2 
// Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console. 
console.log("\nEXERCICE 2 :")

const week = ["lundi","mardi","mecredi","jeudi","vendredi","samedi","dimanche"] // création du tableau
console.log("Les jours de la semaine",week,"\nLe premier jour est",week[0]) // affichage du premier jour de la semaine


// EX 3
// Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console. 
console.log("\nEXERCICE 3 :")

const nbr = [2,4,6,8,10]
let add = 0
for (let i = 0; i <nbr.length; i++){// boucle for qui s'éxecute le nombre de fois de la taille du tab
    add += nbr[i]
}

console.log("La somme de",nbr, "est", add) // affichage dans la console de chaques éléments à l'index i

// EX 4
// Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console. 
console.log("\nEXERCICE 4 :")

const fruits = ["pomme","orange","peche","ananas","raisin"]
console.log("\n5 fruits: ", fruits)

fruits.push("bananne")
console.log("\n6 fruits: ", fruits)

// EX 5
// Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console. 
console.log("\nEXERCICE 5 :")

const noteEtudiant = [4.5,15,20,3,14]

let moyenneNote = 0
for (let i = 0; i <noteEtudiant.length; i++){// boucle for qui s'éxecute le nombre de fois de la taille du tab
    moyenneNote += noteEtudiant[i]
}
moyenneNote/=noteEtudiant.length
console.log("La moyenne des notes",noteEtudiant,"est de :", moyenneNote)


// EX 6
// Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau. 
console.log("\nEXERCICE 6 :")

const oiseaux = ["rouge-gorge","pigeon","aigle","corbeau","mésange"]
for (let i = 0; i <oiseaux.length; i++){// boucle for qui s'éxecute le nombre de fois de la taille du tab
    if (oiseaux[i] === "pigeon"){
        console.log("Oh qu'il est beau ce", oiseaux[i])
    }
    if (oiseaux[i] === "aigle"){
        console.log("Pas beau l'",oiseaux[i])
    }
    else{
        console.log("Pas beau le", oiseaux[i])
    }
}

//CORRECTION 
console.log("/// Correction ///");
console.log(oiseaux.includes('pigeon'));

// EX 7 
// Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console. 
console.log("\nEXERCICE 7 :")

const pays = ["France", "Italie", "Suisse", "Allemagne", "Belgique"]

pays.sort()
console.log(...pays)

// EX 8
// Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau. 
console.log("\nEXERCICE 8 :")

const moisAnnee = ["janvier","février","mars","avril","mai","juin","...","decembre"]
console.log("Les mois de l'annnée", moisAnnee,"\nLe troisième mois est :", moisAnnee[2])

// EX 9 
// Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console. 
console.log("\nEXERCICE 9 :")

const tab2 = []

for (let i = 0; i <5; i++){// boucle for qui s'éxecute le nombre de fois de la taille du tab
    tab2.push(Math.round(Math.random() * (99 - 0 + 1)+1))
    //math.random pour un nombre aléatoire
    //math.round pour arrondir les nombres données par le random
}
console.log(tab2)
console.log("Le minimum :",Math.min(...tab2)," et le maximum :",Math.max(...tab2))
// Ajouter les ... pour que ça marche avec les tableau

// EX 10 
// Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console. 
console.log("\nEXERCICE 10 :")

const phrase = ["Je suis informaticien", "Je suis", "J'aime manger", "J","Ceci est un test pour faire la plus longue phrase"]
let phraseSeul = ""
let indexPhrsLongue = []

for (let i = 0; i<phrase.length; i++){

    indexPhrsLongue.push(phrase[i].length)
    // push de la taille des str dans une liste 
    
}

console.log(phrase[indexPhrsLongue.indexOf(Math.max(...indexPhrsLongue))])
// utilisation de la fonction max pour trouver la lenght la plus grande des push fait dans la boucle for
// utilisation de la fonction index pour avoir l'index du max dans la lsite indexPhrsLongue
// dans phrase[..] car après l'utilisation de toutes les fonction on récupère l'index de l'élément le plus grands qui correspond 
// a l'index de la phrase la plus grande dans la liste `phrase`

