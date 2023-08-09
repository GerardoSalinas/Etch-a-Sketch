
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
    for (let i = 0; i<rows; i++){
        for (let j = 0; j<columns; j++){
            square = document.createElement('div');
            square.classList.add('square');
            square.innerHTML = 'square x';
            gridContainer.appendChild(square);
            addsEvents(square);
        }
    }
    return;
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

//creating new divs
/* let divArray = [];
for (let i = 0; i<3; i++){
    divArray[i] = document.createElement("div");
    divArray[i].innerHTML = 'square x'
    divArray[i].classList.add('square');
    // divArray[i].classList.add('hover');
    gridContainer.appendChild(divArray[i]);
}

let gridDivs = document.querySelectorAll('.square'); */


/* gridDivs.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('.hover');
        let color = getRandomColor();
        if (opacityValue<1){
            opacityValue += 0.1;
        }
        square.style.cssText = `background-color: ${color}; opacity: ${opacityValue}`;
    });

    square.addEventListener('mouseout', () => {
        square.classList.remove('.hover');
    })
}); */





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