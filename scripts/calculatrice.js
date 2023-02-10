/* Voici une calculatrice très simple. 
Le challenge a été d'effacer automatiquement le dernier résultat lorsqu'un nouveau calcul est lancé. 
J'aimerais l'améliorer en prenant en compte les entrées au clavier ou en ajoutant des fonctions de calculs. */

let previousEntry = ""; // déclaration d'une variable pour stocker la précédente entrée. Cette variable est répétée et mise à jour dans chaque fonction.

function display(val){
    // Vérification si la précédente entrée était la fonction solve()
    if (previousEntry === "solve") {
        clearScreen(); // appel de la fonction clearScreen pour effacer l'écran
    }
    previousEntry = ""; // réinitialisation de la variable previousEntry
    document.getElementById("display").value += val;
    return val;
};

//Touche "entrée" pour résoudre les opérations
function solve(){
    previousEntry = "solve"; // MAJ de la variable previousEntry pour indiquer que la précédente entrée était la fonction solve()
    let x = document.getElementById("display").value
    let y = eval(x);
    document.getElementById("display").value = y
    return y;
}

/* FONCTIONS TOUCHES SPÉCIALES */
//Clear pour effacer toutes les entrées
function clearScreen(){
    document.getElementById("display").value = '';
    previousEntry = "clear";
}
//Delete pour effacer la dernière entrée
function deleteScreen() {
    let display = document.getElementById("display");
    let currentDisplay = display.value;
    display.value = currentDisplay.substring(0, currentDisplay.length - 1);
    previousEntry = "delete";
}