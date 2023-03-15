# <strong><ins>Notes JS </strong></ins>

## <ins>Installation des outils : </ins>
- Installer Node JS
- Utiliser VSCode
- ### Mdn web docs :: bible : https://developer.mozilla.org/fr/ 

## <ins>Reflex à avoir :</ins>
- Les noms de variables et de fonction doivent être en Anglais et pertinente pour le code
- Camel Case = `anotherVariable`=> minuscule début et séparer les noms avec des maj
- Pascal Case = `TryThis01` => maj au début, maj pr séparer les noms et chiffres

## <ins>Les bases du JS : </ins>
- Premier code qui affiche du txt dans la console intégré à VS où ZSH : 
``` javascript
console.log('Hello World');
``` 

- Déclarer une varibale : 
``` javascript
var maVariable = "Bonjour";
``` 
- Les commentaires = `//Ceci est un commentaire` ou `/* ... */`(== C)
 
```javascript
console.log(typeof isAwake)
```
- |--> donne le type d'une variable
- Définir une chaine de caracte avec `'`, `"` ou ``


## <ins>Spé du JS : </ins>
- Language <strong>faiblement typé ≠ C</strong>
- A chaque nouvelle ajout dans le code = l'executer
- Pas très bon en calculs Maths
- Types de variables == tous les autres languages
- `;` obtionnels en JS = si on en met, les mettres de partout sinon rien
- <ins><strong>Spread operateur : </ins></strong>
    - récuperer les valeurs d'un tableau et les éclater/les répendres
    ```javascript
    Math.min(...nuber);

    //va écalter les valeurs du tableau de myArray dans myOtherArray 
    const myArray = [132,33,23,4,32]
    const myOtherArray = [1,2,3,..myArray]
    ```
- <ins>Les expréssions régulières : <strong>RegEx</strong></ins> : séléctionner des lettres spécifiques dans une chaine de caractère
```js
return myString.replace(/[aieouy]/gi, '');
// le g est obligatoire (remove toutes les occurencre)
//i pour la case (sans celui-ci ne prends pas en compte les majs)
```
- `test` (fonction predef js) l'occurence dans si n est dans la chaine de caractère renvoie True
```js 
const monTest = ["Ceci est un test"];

console.log(RegExp('n').test(monTest))
// renvoie true car il y a n dans la chaine de caractère
```
- fonction `sort`: 
    - le signe de la soustraction de <strong>b - a</strong>, donne un signe qui est utilisé pour trier les ordres dans le tableau 
    trié.
    - donc <strong>a - b</strong> range par ordre croissant.
```js
function sortDescending(numbers) {
    return numbers.sort((a ,b) => b - a)// trie par ordre décroissant grace au b - a  
}
```
## <ins>Les variables : </ins>
- `var`≠ `let`≠ `const`== pour def des variables 
```javascript
var maVariable = "Bonjour";//Création d'une variable
const pi = 3.14;// création d'une varibale constante
let text1 = 'Ceci est une chaine de carcatères'; // def text1
```
- ### <strong>NE PAS UTILISER `var`</strong>
- `let & const` >> `var`
- `const` == créer une variable qui ne sont pas réafectable (constante)
- `let`== déclarer une variable réafectable a tout moment + affecter dans `function // while // for...`
- Privilégier `const` à `let` le plus possible

## <ins> Les tableaux en JS :</ins>
``` javascript
const tab = ["Element 1"];// déclarer un tab
tab [1] = "Element 2";// ajouter des éléments dans un tableau
console.log(tab);
```
- `push` => ajoute une valeur dans un tableau et retourne la nouvelle longueur du tableau
``` javascript
const nouvelleLonguerTableau = myArray.push('new element');
//ajout de la valeur dans myArray + la variable nouvelleLongueurTableau prends pour valeur la nouvelle longueur de myArry
```
- changer la valeur d'un élément dans le tableau :
```javascript 
myArray[0] = 'test';
```
- ajouter une tableau dans un tableau : 
```javascript
myArray[0] = [1,2,3];
```
- <strong>`split` </strong>dans un tableau : `split(index, nombre d'elem)`
```javascript
myArray.split(2,1);// supprime des éléments
console.log(myArray);
```
- peut être utiliser pour remplacer des éléments 
```javascript
myArray.split(2,1,'Test');
//supprimer l'élément à l'index 2 et le remplace
myArray.split(2,0,'Test');
//ne supprime pas l'élément et ajoute à l'index 2 'Test'
```
## <ins>Les Objets en JS: </ins>
- La syntaxe des objets en JS 
```javascript 
let myObjets = {
    firstname : 'John',
    lastname : 'Doe',
    age : 45,
    mailVerrified : true
}
```
- Propriété : clef de la valeur dans un tableau
```js 
const myObject = {
    firstname: 'Maxime',
    lastname: 'NONY',
    age: 18,
    hasDriverLicence: true, 
    placeOfBirth:'Lyon'
}
```



## <ins>Les boucles en JS : </ins>
- <ins>for in boucle </ins>
```javascript
// Boucle pour parcourir l'objet

for (const key in myObjets) { // for in boucle
    const element = myObjets[key];// récuperer les clefs dans mon objet
    console.log(key)
    
}
```
- <ins>for of</ins> (=> qui ne marche pas pour les Objets)
```javascript
// Boucle diff qui ne marche pas pour les objets
//car un objet n'est pas itérable
for(const value of myObjets){
    console.log(value)
}
```

## <ins>Les fonction :</ins>
- Déclaration de la fonction
```javascript
function sumFunction (nb1,nb2) {
}
```
- On peut aussi le faire comme ça
```javascript
function sum = function(nb1,nb2) {
    return nb1 + nb2; //return explicite
}
```
- Ou comme ça ==> <strong>IMPORTANTE</strong>
```javascript 
const sum = (a, b) => a + b // return implicite
```
- Pour appeler une fonction 
```javascript
//Comme ça
console.log(sumFunction(1,3));
//Ou comme ça
const sum = sumFunction(1,3);
console.log(sum);
```
- Une fonction peut prendre en paramètre une fonction, pour faire de la programmation assincron : 
    - fonction call back
    ```javascript
    setTimeout (
    function () {
        console.log('Hello, Wold!');
        
    }, 1000);

    console.log("Hello again");
    ````

- Parcourir un tableau : 
```javascript 
const MonTabl = [1,2,3,4]

MonTabl.forEach((numero)=>{
    console.log(numero)
});
```
- fonction map sur les tableaux : elle <strong> équivalent au for each </strong> 
```js
const TestArray = [1,3,4,12,421]

TestArray.map((element) => {
    console.log(element)
});
```


## <ins>Programation Assincroniser : </ins>
- Programation qui va s'éxecuter au bout d'un certain temps, d'un évenement, <strong>dans un ordre choisi.</strong>
- ≠ Programation sincron : fait des call les uns après les autres



## <ins>Fonction PréDef : </ins>
- Savoir si c'est dans un tableau 
```javascript 
console.log(oiseaux.includes('pigeon'));
```

## <ins> JavaScript Web et DOM : </ins>
- `document`=> c'est un objet global

```js
const doc = document; 
```
- essayer les commandes suivantes
```js
doc.getElementsByID("...");
doc.getElementsByClass("...");
```
- commande faites en cours + aide de MWD : 
```js
const doc = document; 
    const myElement = doc.getElementById("test") // avoir l'element test
    myElement.textContent = "New Text"; // ecrire New Text dans myElement
    myElement.innerHTML = "<h1>New Paragraph </h1>" // changer les balises et le contenu
    myElement.style.color = "red"; // changer la couleur
    const newElement = doc.createElement("div"); //créer un element div
    newElement.id = "test2";//avec l'id test 2
    myElement.appendChild(newElement); // ajout en tant que fils a l'élément p 
    newElement.textContent = "Test 2"; // contenu de div="test2" = Test 2
    newElement.style.color = "white"; //couleur blanche
    newElement.style.textDecoration = "underline"; // souligner
```
- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML


- ` myButton.addEventListener` => écoute ce qu'on lui donne en arguement par rapport à myButton. 


## <ins>Les promesses js : </ins>
- C'est une fonction qui a trois status : en attente, tenu, perdu
- Fetch retourne des promesses 
- Ex de promesse js 
```js 
 const promise = new Promise((resolve, reject) => { // fonction promise qui prends en paramêtre resolve ou reject
            setTimeout(() => { // tim de 1000 ms
                const randomNumber = Math.floor(Math.random() * 10); // création d'un nbr aléatoire
                if (randomNumber % 2 == 0) { //verfi si paire
                    resolve(randomNumber);
                } else { //sinon 
                    reject(new Error('Le nombre est impair.'));
                }
            }, 1000);
        });
```


## <ins>API Fetch : </ins>
- Fournit une interface pour la récupération de ressources
- Permet d'étudier les request et les réponsses : 
- Connexion à une API : 
```js
 function fetchSomePokemon() { // appelle de l'api 
            return fetch('https://pokeapi.co/api/v2/pokemon?limit=150')//url donné de l'api
        }
```



