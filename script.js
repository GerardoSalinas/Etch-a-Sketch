
// functions here
function validateNumber(number){//works properly
    while (number <= 0 || Number.isInteger(number) === false){
        number = parseInt(prompt("Only positive integers allowed: "))
    }
    return number
}

function generateGrid(rows, columns){
    return;
}


//


//query selectors
let dimensionsButton = document.querySelector('.dimButton');


//


// Event Listeners
dimensionsButton.addEventListener('click', () => {
    let rows = parseInt(prompt("Enter grid rows:"));
    rows = validateNumber(rows);
    let columns = parseInt(prompt("Enter grid columns:"));
    columns = validateNumber(columns);
    generateGrid(rows, columns);
});


//