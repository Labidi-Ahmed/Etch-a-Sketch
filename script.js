const prog = document.querySelector(".prog");
const container = document.querySelector(".container");
const rangeOutPut = document.querySelector('#rangeOutput');
let color = "black";
let isMouseDown = false;
const rainbowBut=document.querySelector(".rgbBut");


function grid(container, rows, columns) {
    for (let i = 0; i < rows; i++) {
        const div = document.createElement("div");
        for (let j = 0; j < columns; j++) {
            const box = document.createElement("div")
            box.classList.add("box")
            div.append(box)
        }
        div.classList.add("row")
        container.append(div)
    }
}

function draw(event) {
    const target = event.target;
    if (target.classList.contains("box") && isMouseDown) {
        target.style.backgroundColor = color; // Change the background color while drawing
    }
}



const Paletecolor = document.querySelector('.color');
Paletecolor.addEventListener('input', (e) => {
    color = e.target.value;
});

function getRandomRainbowColor() {
    const rainbowColors = ["red", "orange", "yellow", "green", "blue", "purple"];
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}
rainbowBut.addEventListener('click',()=>{
    container.classList.toggle('rainbow-mode');
    rainbowBut.classList.toggle('rgb')
})
const gridLines=document.querySelector('.gridLines');
gridLines.addEventListener('click',()=>{
    gridLines.classList.toggle('gridLinesTgl')
    const boxes=document.querySelectorAll('.box');
    boxes.forEach(box => {box.classList.toggle('boxTgl')
        
    });

})


// Toggle drawing mode when mouse is pressed
container.addEventListener("mousedown", (event) => {
    
    isMouseDown = true;
    draw(event);
    event.preventDefault(); 
});

container.addEventListener("mouseup", () => {
    isMouseDown = false;
});

// Handle drawing when mouse moves over the container
container.addEventListener("mousemove", (event) => {
    const target = event.target;
    if (target.classList.contains("box") && isMouseDown) {
        if (container.classList.contains("rainbow-mode")) {
            target.style.backgroundColor = getRandomRainbowColor();
        } else {
            target.style.backgroundColor = color;
        }
    }
});

// Clear the drawing when the mouse leaves the container
container.addEventListener("mouseleave", () => {
    isMouseDown = false;
});

//displayig the boxes inside of container when we specify a range from the range bar
prog.addEventListener('input', (e) => {
    container.innerHTML = "";

    let rangeValue = prog.value;

    rangeOutPut.innerHTML = (String(rangeValue) + "*" + String(rangeValue)); // display the value of the range 

    const index = e.target.value;
    grid(container, index, index);
});



// Clear the drawing when the mouse leaves the container
container.addEventListener("mouseleave", () => {
    isMouseDown = false;
});

//displayig the boxes inside of container when we specify a range from the range bar
prog.addEventListener('input', (e) => {
    container.innerHTML = "";

    let rangeValue = prog.value;

    rangeOutPut.innerHTML = (String(rangeValue) + "*" + String(rangeValue)); // display the value of the range 

    const index = e.target.value;
    grid(container, index, index);

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.setAttribute('id', 'box');
    });
});
