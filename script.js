const sketchArea = document.querySelector("#sketchArea");
const clearBtn = document.getElementById("clear");
const slideNum = document.querySelector("#slideNumDisplay");
const inputSlider = document.getElementById("inputSlider");
const inputColor = document.getElementById("colorPicker");
const buttons = document.querySelectorAll("button");
const colorBtn = document.getElementById("color");
const rgbBtn = document.getElementById("rgb");
const eraserBtn = document.getElementById("eraser");
let modeSelection;

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideNum.textContent = value;
    // slideNum.style.left = value + "%";
    slideNum.style.bottom = (value-260) + "px";
    slideNum.classList.add("show");
    sketchArea.innerHTML = "";
    grid();
    colorMode();
});


inputSlider.onblur = (() => {
    slideNum.classList.remove("show");
});

function grid(){
    const gridCount = inputSlider.value;

    for(let i = 0; i < gridCount * gridCount; i++){
        const sketchBlock = document.createElement("div");
        sketchBlock.classList.add("sketchBlock");
        sketchBlock.setAttribute("draggable", false);//doesnt fully solve drag
        sketchBlock.style.width = `${640 / gridCount}px`;
        sketchBlock.style.height = `${640 / gridCount}px`;
        sketchArea.appendChild(sketchBlock);
    }
};
grid()


buttons.forEach(button => button.addEventListener("click", () => {
    modeSelection = button.id;
    colorMode();
    buttonModeColor();
}));


function colorMode(){
    const allBlocks = document.querySelectorAll(".sketchBlock");

    allBlocks.forEach(allBlocks => allBlocks.addEventListener("mouseover", (e) => {
    //trial code
    
    //e.buttons == 1 is built in equivalent to mousedown
    if(modeSelection == "eraser" && e.buttons == 1){
        allBlocks.style.background = "white";
    } else if (modeSelection == "color" && e.buttons == 1){
        allBlocks.style.background = inputColor.value;
    } else if (modeSelection == "rgb" && e.buttons == 1){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256)+50;
        let b = Math.floor(Math.random() * 256)+100;
        allBlocks.style.background = `rgb(${r},${g},${b})`;
    }                                       
    //trial end
    }));
}
colorMode()

// clearBtn.addEventListener("click", () => {
//     clearGrid()
// })

clearBtn.onclick = (() => {
    clearGrid();
});

function clearGrid(){
    sketchArea.innerHTML = "";
    grid();
};

inputColor.oninput = (() => {
    modeSelection = "color";
});


function buttonModeColor(){
    if(modeSelection == "color"){
        colorBtn.classList.replace("button","activeBtn");
        eraserBtn.classList.replace("activeBtn","button");
        rgbBtn.classList.replace("activeBtn","button");
    } else if (modeSelection == "eraser"){
        eraserBtn.classList.replace("button","activeBtn");
        colorBtn.classList.replace("activeBtn","button");
        rgbBtn.classList.replace("activeBtn","button");
    } else if (modeSelection == "rgb"){
        rgbBtn.classList.replace("button","activeBtn");
        colorBtn.classList.replace("activeBtn","button");
        eraserBtn.classList.replace("activeBtn","button");
    } else {
        colorBtn.classList.replace("activeBtn","button");
        eraserBtn.classList.replace("activeBtn","button");
        rgbBtn.classList.replace("activeBtn","button");
    }
};