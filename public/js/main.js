/*
// exo 1 
let prenoms = ["Ayhan", "Zulma", "Adame", "Seb", "Malo","Max", "Max2","Alex","Natchez"]; 

let i = 0; 


//exo 1 methode 1 
do{
    console.log(prenoms[i]);
    i++;
}while(i < prenoms.length); 



// exo 1 methode 2 
while(i < prenoms.length){
    console.log(prenoms[i]);
    i++;
}
 
*/

// exo 2 

/*
let fruits = ["babane", "pomme", "tomate", "cerise"]; 

while(fruits.length > 0){
    console.log(fruits);
    fruits.shift(); // ou fruits.pop(); si supp de la fin ; 
}

console.log(fruits);

*/

//exo 3 

/*
let panierLegumes = ["oginon", "carrote", "pomme de terre"]; 

let caisseLegumes = []; 

console.log(`panier`, panierLegumes);
console.log(`caise`, caisseLegumes);


let longueur = panierLegumes.length; 


while(panierLegumes.length > 0){ 
    caisseLegumes.push(panierLegumes[0]); 
    panierLegumes.shift();
}


console.log(`caisse: `, caisseLegumes);
console.log(`panier : `, panierLegumes);


*/


// exo 4 


/*
let chiffre;// = parseInt(prompt("Entrez un chiffre entre 0 et 10. Vous avez 3 chanses")); 

let bonnerep = Math.floor(Math.random() * (10 - 0));

console.log(bonnerep); 


let chanses = 3; 


while(chiffre != bonnerep && chanses > 0){
    chiffre = parseInt(prompt(`Entrez un chiffre entre 0 et 10. Vous avez ${chanses} chanses`)); 
    chanses--; 
    //chanses--; 
}

if(chiffre == bonnerep){
    alert('bravo, vous avez gagnez un biscuit. '); 
}


if(chanses == 0 && chiffre != bonnerep){
    alert(`Vous avez échouez. LE bon nombre était: ${bonnerep}`); 
}


*/

//exo 5 
/*
let chiffre;

let bonnerep = Math.floor(Math.random() * (10 - 0));

console.log(bonnerep); 


let chanses = 3; 


do{
    chiffre = parseInt(prompt(`Entrez un chiffre entre 0 et 10. Vous avez ${chanses} chanses`)); 
    chanses--; 
}while(chiffre != bonnerep && chanses > 0);


if(chiffre == bonnerep){
    alert('bravo, vous avez gagnez un biscuit. '); 
}


if(chanses == 0 && chiffre != bonnerep){
    alert(`Vous avez échouez. LE bon nombre était: ${bonnerep}`); 
}

*/


/*

//exo 6 
let d = new Date; 
let date = d.getFullYear(); 

console.log(date);

let randomAnnee = Math.floor(Math.random() * (2018 - 1970) + 1970);

console.log(randomAnnee);

let userAge;

let chanses = 3; 

let agecorrect = (date - randomAnnee);


while(userAge != agecorrect && chanses > 0){
    userAge = parseInt(prompt(`Si je suis née en ${randomAnnee}, quel age ai-je aujourd’hui ? (chance: ${chanses})`)); 
    chanses--; 
    //chanses--; 
}

if(userAge == agecorrect){
    alert('bravo, vous avez gagnez un biscuit. '); 
}


if(chanses == 0 && userAge != agecorrect){
    alert(`Vous avez échouez. LE bon nombre était: ${agecorrect}`); 
}

*/


