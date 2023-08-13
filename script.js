
// functions here
function validateNumber(number){//works properly
    while (number <= 0 || Number.isInteger(number) === false){
        number = parseInt(prompt("Only positive integers allowed: "))
    }
    return number
}

function getRandomColor(){//returns a string containing all three values for a random rgb color
    let rgbValues = [] ;
    for (let i = 0; i<3; i++){
        rgbValues[i] = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;//creates a random number [0,255]
    } 
    return `rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`; 
}

function generateGrid(rows, columns){
    let square;
    let rowDiv;
    for (let i = 0; i<rows; i++){
        rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let j = 0; j<columns; j++){
            square = document.createElement('div');
            square.classList.add('square');
            addsEvents(square);
            rowDiv.appendChild(square);
        }
        gridContainer.appendChild(rowDiv);
    }
    return;
}

function removeGrid(){
    const parent = gridContainer;
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
        
    }
    
}

function addsEvents(node){
    node.addEventListener('mouseenter',() => {
        let randomColor = getRandomColor();
        node.classList.remove('square');
        node.classList.add('hover');
        node.setAttribute('style',`background-color: ${randomColor}; opacity: ${opacityValue}`);
        opacityValue++;
    });

    node.addEventListener('mouseleave',() => {
        node.classList.remove('hover');
        node.classList.add('square');
    });
}

let opacityValue = 0.1;

//


//query selectors
let gridContainer = document.querySelector('.grid-container');
let dimensionsButton = document.querySelector('.dimButton');
let mainTitle = document.querySelector('.title');

generateGrid(8, 8); //generates default 16x16 grid





//


// Event Listeners
dimensionsButton.addEventListener('click', () => {
    let rows = parseInt(prompt("Enter grid rows:"));
    rows = validateNumber(rows);
    let columns = rows;
    removeGrid();
    generateGrid(rows, columns);
});

mainTitle.addEventListener('click', () => {
    removeGrid();
    generateGrid(8, 8);
});


//