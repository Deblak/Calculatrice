let previousEntry = ""; // Déclaration d'une variable pour stocker la précédente entrée. Cette variable est répétée et mise à jour dans chaque fonction.

function display(val) {
    // Vérification si la précédente entrée était la fonction solve()
    if (previousEntry === "solve") {
        clearScreen(); // Appel de la fonction clearScreen pour effacer l'écran
    }
    previousEntry = ""; // Réinitialisation de la variable previousEntry
    const displayElement = document.getElementById("display");
    const currentContent = displayElement.value;

    // Ajout d'un espace après chaque opérateur
    if (isOperator(val) && isOperator(currentContent.charAt(currentContent.length - 1))) {
        displayElement.value = currentContent + ' ' + val;
    } else {
        displayElement.value = currentContent + val;
    }
    return val;
}

// Touche "r" pour résoudre les opérations
function solve() {
    previousEntry = "solve"; // Mise à jour de la variable previousEntry pour indiquer que la précédente entrée était la fonction solve()
    const displayElement = document.getElementById("display");
    const expression = displayElement.value.replace(/\s/g, ''); // Supprimer tous les espaces de l'expression
    const result = eval(expression);
    const roundedResult = parseFloat(result.toFixed(3)); // Arrondir le résultat à 3 chiffres après la virgule
    displayElement.value = roundedResult;
    return roundedResult;
}

/* FONCTIONS TOUCHES SPÉCIALES */
// Clear pour effacer toutes les entrées
function clearScreen() {
    document.getElementById("display").value = '';
    previousEntry = "clear";
}

// Delete pour effacer la dernière entrée
function deleteScreen() {
    let display = document.getElementById("display");
    let currentDisplay = display.value;
    display.value = currentDisplay.substring(0, currentDisplay.length - 1);
    previousEntry = "delete";
}

function isOperator(character) {
    // Fonction pour vérifier si un caractère est un opérateur
    const operators = ['+', '-', '*', '/'];
    return operators.includes(character);
}

// Gestion des entrées au clavier
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "r") {
        solve(); // Appeler la fonction solve lorsque la touche "r" est enfoncée
    } else if (key === "c") {
        clearScreen(); // Appeler la fonction clearScreen lorsque la touche "c" est enfoncée
    } else if (key === "d") {
        deleteScreen(); // Appeler la fonction deleteScreen lorsque la touche "d" est enfoncée
    } else if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {        display(key); // Appeler la fonction display pour les chiffres et opérateurs valides
    }
});
